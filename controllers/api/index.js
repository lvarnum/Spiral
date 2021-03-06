const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const userRoutes = require("./usersController");
const universityRoutes = require("./universitiesController");
const courseRoutes = require("./coursesController");
const assignmentRoutes = require("./assignmentsController");
const scheduleItemRoutes = require("./scheduleitemsController");


// Hook up to the router
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/universities", universityRoutes);
router.use("/courses", courseRoutes);
router.use("/assignments", assignmentRoutes);
router.use("/scheduleItems", scheduleItemRoutes);



// Export the router
module.exports = router;
