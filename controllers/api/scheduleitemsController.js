const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * scheduleItem - Read All
 */
router.get("/", isAuthenticated, function (req, res) {
  db.scheduleItem.find({}).sort([['startTime', 1]])
    .populate("assignments")
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * scheduleItem - Read One
 */
router.get("/:id", isAuthenticated, function (req, res) {
  db.scheduleItem.findById(req.params.id)
    .populate("assignments")
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/** 
 * scheduleItem - Create
 */
router.post("/", isAuthenticated,  function (req, res) {
  db.scheduleItem.create(
    req.body
  )
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * scheduleItem - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
  db.scheduleItem.findByIdAndUpdate(req.params.id, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * scheduleItem - Delete
 */
router.delete("/:id", isAuthenticated, function (req, res) {
  db.scheduleItem.findByIdAndDelete(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;