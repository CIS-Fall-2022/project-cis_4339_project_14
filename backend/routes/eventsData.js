const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();

//importing data model schemas
let { eventdata } = require("../models/models");
let { primarydata } = require("../models/models");
//GET all entries
router.get("/", (req, res, next) => {
    eventdata.find(
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    ).sort({ 'updatedAt': -1 }).limit(10);
});



//super secret get: configs for our bar chart.
router.get("/configTotals", (req, res, next) => {
    var checkDate = new Date()
    eventdata.aggregate([
        {
            $match: {
                date: {
                    $gt: new Date(checkDate.setMonth(checkDate.getMonth() - 2)),
                    $lt: new Date()
                }
            }
        },
        { $group: { _id: "$eventName", total: { $sum: { $size: "$attendees" } } } 
        },
        {
            $project: {
                "total": "$total",
                _id: 0
            }
        }
    ],
    (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    }
)
});

router.get("/configLabels", (req, res, next) => {
    var checkDate = new Date()
    eventdata.aggregate([
        {
            $match: {
                date: {
                    $gt: new Date(checkDate.setMonth(checkDate.getMonth() - 2)),
                    $lt: new Date()
                }
            }
        },
        { $group: { _id: "$eventName", total: { $sum: { $size: "$attendees" } } } 
        },
        {
            $project: {
                "name": "$_id",
                _id: 0
            }
        }
    ],
    (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    }
)
});
//GET single entry by ID
router.get("/id/:id", (req, res, next) => {
    eventdata.find({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//GET entries based on search query
//Ex: '...?eventName=Food&searchBy=name' 
router.get("/search/", (req, res, next) => {
    let dbQuery = "";
    if (req.query["searchBy"] === 'name') {
        dbQuery = { eventName: { $regex: `^${req.query["eventName"]}`, $options: "i" } }
    } else if (req.query["searchBy"] === 'date') {
        dbQuery = {
            date: req.query["eventDate"]
        }
    };
    eventdata.find(
        dbQuery,
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

//GET events for which a client is signed up
router.get("/client/:id", (req, res, next) => {
    eventdata.find(
        { attendees: req.params.id },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

router.get("/org/:orgid", (req, res, next) => {
    eventdata.find(
        { org_id: req.params.orgid },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});


//POST
router.post("/", (req, res, next) => {
    eventdata.create(
        req.body,
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

//PUT
router.put("/:id", (req, res, next) => {
    eventdata.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

//PUT add attendee to event
router.put("/addAttendee/:id", (req, res, next) => {
    //only add attendee if not yet signed uo
    eventdata.find(
        { _id: req.params.id, attendees: req.body.attendee },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                if (data.length == 0) {
                    eventdata.updateOne(
                        { _id: req.params.id },
                        { $push: { attendees: req.body.attendee } },
                        (error, data) => {
                            if (error) {
                                consol
                                return next(error);
                            } else {
                                res.json(data);
                            }
                        }
                    );
                }

            }
        }
    );

});

// Counts total number of event attendees for each event
router.get("/eventAttendees", (req, res, next) => {
    var checkDate = new Date()

    eventdata.aggregate([
        {
            $match: {
                date: {
                    $gt: new Date(checkDate.setMonth(checkDate.getMonth() - 2)),
                    $lt: new Date()
                }
            }
        },
        { $group: { _id: "$eventName", total: { $sum: { $size: "$attendees" } } } },
    ],
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    )
});


//Delete Event by single entry by ID
router.delete("/id/:id", (req, res, next) => {
    eventdata.deleteOne({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});
module.exports = router;
