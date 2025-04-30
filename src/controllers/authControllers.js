const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

let refreshTokens = [];
const authController = {
    //REGISTER
    registerUser: async(req, res) => {
        try{
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)
            //create new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                phone_number: req.body.phone_number,
                full_name: req.body.full_name,
                password: hashed
            })
            //save
            const user = await newUser.save()
            res.status(200).json(user)
        }catch(err){
            res.status(500).json(err);
        }
    },
    //Generate accesstoken
    generateAccessToken: (user) => {
        return jwt.sign({
            id: user.id,
            teacher: user.teacher
        }, process.env.JWT_ACCESS_KEY, {expiresIn: "1d"})
    },

    //Generate refresh token

    generateRefreshToken: (user) => {
        return jwt.sign({
            id: user.id,
            teacher: user.teacher
        }, process.env.JWT_REFRESH_KEY, {expiresIn: "365d"})
    },

    //Login
    loginUser: async(req, res) => {
        try{
            const user = await User.findOne({username: req.body.username});
            if(!user) {return res.status(404).json("wrong username!")}

            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )

            if(!validPassword) {return res.status(404).json("wrong password!")}
            
            if(user && validPassword) {
               
                const accessToken = authController.generateAccessToken(user)
                const refreshToken = authController.generateRefreshToken(user)
                refreshTokens.push(refreshToken);

                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict"
                })

                const {password, ...others} = user._doc;
                return res.status(200).json({
                    ...others,
                    accessToken
                })
            }

        }catch(err){
            return res.status(500).json(err);
        }
    },
    requestRefreshToken: async(req, res) => {
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken) return res.status(401).json("You're not authenticated")
        if(!refreshTokens.includes(refreshToken)){
            return res.status(403).json('refresh token is not valid!');
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if(err){
                console.log(err);
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

            //Create new...
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);

            refreshTokens.push(newRefreshToken);
            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"
            })

            res.status(200).json({accessToken: newAccessToken})
        })
    },
    userLogout: async(req, res) => {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookie.refreshToken);
        res.status(200).json("logout successfully");
    }
}

module.exports = authController;
