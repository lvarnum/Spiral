const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * ScheduleItem - Read All
 */
router.get("/", isAuthenticated, function (req, res) {
  db.ScheduleItem.find({}).sort([['startTime', 1]])
    .populate("assignments")
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * ScheduleItem - Read One
 */
router.get("/:id", isAuthenticated, function (req, res) {
  db.ScheduleItem.findById(req.params.id)
    .populate("assignments")
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/** 
 * ScheduleItem - Create
 */
router.post("/", isAuthenticated,  function (req, res) {
  db.ScheduleItem.create(
    req.body
  )
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * ScheduleItem - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
  db.ScheduleItem.findByIdAndUpdate(req.params.id, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * ScheduleItem - Delete
 */
router.delete("/:id", isAuthenticated, function (req, res) {
  db.ScheduleItem.findByIdAndDelete(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;