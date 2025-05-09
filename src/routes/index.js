
const courseController = require("../controllers/courseController");
const middlewareController = require("../controllers/middlewareController");
const router = require("express").Router();

router.post('/createcourse', courseController.createCourse);
router.get('/courses', middlewareController.verifyToken, courseController.getAllCourses);


module.exports = router;