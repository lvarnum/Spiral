const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const userRoutes = require("./usersController");
const universityRoutes = require("./universitiesController");
const classRoutes = require("./classesController");
const assignmentRoutes = require("./assignmentsController");


// Hook up to the router
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/universities", universityRoutes);
router.use("/classes", classRoutes);
router.use("/assignments", assignmentRoutes);


// Export the router
module.exports = router;
