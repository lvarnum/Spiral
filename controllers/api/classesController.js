const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * Class - Read All
 */
router.get("/", isAuthenticated, function (req, res) {
    db.Class.find({}).sort([['prefix', 1]])
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Class - Read One
 */
router.get("/:id", isAuthenticated, function (req, res) {
    db.Class.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/** 
 * Class - Create
 */
router.post("/", isAuthenticated, function (req, res) {
    db.Class.create(
        req.body
    )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Class - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
    db.Class.findByIdAndUpdate(req.params.id, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;