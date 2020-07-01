const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * Assignment - Read All
 */
router.get("/", isAuthenticated, function (req, res) {
    db.Assignment.find({}).sort([['due', 1]])
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Assignment - Read One
 */
router.get("/:id", isAuthenticated, function (req, res) {
    db.Assignment.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/** 
 * Assignment - Create
 */
router.post("/", isAuthenticated, function (req, res) {
    db.Assignment.create(
        req.body
    )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Assignment - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
    db.Assignment.findByIdAndUpdate(req.params.id, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Assignment - Delete
 */
router.delete("/:id", isAuthenticated, function (req, res) {
    db.Assignment.findByIdAndDelete(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;