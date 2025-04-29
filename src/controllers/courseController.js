
const Courses = require('../models/Course');

const courseController = {
    createCourse: async(req, res) => {
        const newCourse = new Courses({
            course_name: req.body.course_name,
            owner: req.body.owner
        });
        try{
            await newCourse.save();
            return res.status(200).json('Create a course successfully!');
        }catch(err){
            return res.status(500).json(err);
        }
        

        
    },
    getAllCourses: async(req, res) => {
        try{
            const courses = await Courses.find();
            return res.status(200).json(courses)
        }catch(err){
            console.error('Error fetching courses:', error);
            return res.status(500).json({ message: "Đã xảy ra lỗi khi lấy danh sách khóa học." });
        }
        
    }
}

module.exports = courseController;