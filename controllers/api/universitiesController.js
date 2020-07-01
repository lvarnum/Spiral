const db = require("../../models");
const router = require("express").Router();

/**
 * University - Read All
 */
router.get("/", function (req, res) {
    db.University.find({}).sort([['name', 1]])
        .populate("classes")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * University - Read One
 */
router.get("/:id", function (req, res) {
    db.University.findById(req.params.id)
        .populate("classes")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/** 
 * University - Create
 */
router.post("/", function (req, res) {
    db.University.create(
        req.body
    )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * University - Update
 */
router.put("/:id", function (req, res) {
    db.University.findByIdAndUpdate(req.params.id, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;