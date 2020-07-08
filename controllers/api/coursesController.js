const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * Course - Read All
 */
router.get("/", isAuthenticated, function (req, res) {
    db.Course.find({}).sort([['prefix', 1]])
        .populate("university")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Course - Read One
 */
router.get("/:id", isAuthenticated, function (req, res) {
    db.Course.findById(req.params.id)
        .populate("university")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/** 
 * Course - Create
 */
router.post("/", isAuthenticated, function (req, res) {
    db.Course.create(
        req.body
    )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Course - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
    db.Course.findByIdAndUpdate(req.params.id, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;