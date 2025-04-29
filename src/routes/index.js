
const courseController = require("../controllers/courseController");
const middlewareController = require("../controllers/middlewareController");
const router = require("express").Router();

router.post('/createcourse', courseController.createCourse);
router.get('/courses', courseController.getAllCourses);


module.exports = router;