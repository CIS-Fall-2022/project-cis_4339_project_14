const express = require("express");
const ObjectID = require("mongoose");
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


//GET entries based on search query
//Ex: '...?eventName=Food&searchBy=name' 
router.get("/search/", (req, res, next) => { 
    let dbQuery = "";
    if 
    (req.query["searchBy"] === 'name') {
        dbQuery = { 
            eventName: { $regex: `^${req.query["eventName"]}`, $options: "i" },
            org_id: req.query.org_id
        }
    } else if 
    (req.query["searchBy"] === 'date') {
        dbQuery = {
            date:  req.query["eventDate"],
            org_id: req.query.org_id
        }
    } else if 
    (req.query["searchBy"] === 'client') {
        dbQuery = {
            attendees: req.query.id
            }
    } else if
    (req.query["searchBy"] === 'org') {
        dbQuery = {
            org_id: req.query.org_id
        }
    }else if 
    (req.query["searchBy"] === 'id') {
        dbQuery = {
            _id: req.query.id
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


router.put("/update/", (req, res, next) => {
    let dbQuery = "";
    if 
    (req.query["updateBy"] === 'name') {
        dbQuery = { 
            eventName: { $regex: `^${req.query["eventName"]}`, $options: "i" },
            org_id: req.query.org_id
        }
    } else if 
    (req.query["updateBy"] === 'date') {
        dbQuery = {
            eventDate: { $regex: `^${req.query["eventDate"]}`, $options: "i" },
            org_id: req.query.org_id
        }
    } else if
    (req.query["updateBy"] === 'id') {
        dbQuery = {
            _id: req.query.id,
        }
    };
    eventdata.findOneAndUpdate( 
        dbQuery, 
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
// This has to go into a separate function unfortunately
// As much as I want to reach callback hell and chain
// a bunch of stuff to create a command query system
// There's no need for it
router.put("/updateAttendees/", (req, res, next) => {
    //only add attendee if not yet signed uo
    eventdata.find( 
        { 
        _id: req.query.id, 
        attendees: req.body.attendee 
        }, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                if (data.length == 0) {
                    eventdata.updateOne(
                        { _id: req.query.id }, 
                        { $push: { attendees: req.body.attendee } },
                        (error, data) => {
                            if (error) {
                                // Eduardo: ??
                                // just. consol
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

/* //GET events for a single client
router.get("/events/:id", (req, res, next) => { 
    eventdata.find( 
        {attendees: req.params.id},  
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
}); */

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
        { $group: { _id: "$eventName", total: { $sum: { $size: "$attendees" } } } }
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


// eventdata DELETE route
// yes I have no shame and I will reuse code
router.delete("/delete/", (req, res, next) => { 
    let dbQuery = "";
    if 
    (req.query["searchBy"] === 'name') {
        dbQuery = { 
            eventName: { $regex: `^${req.query["eventName"]}`, $options: "i" },
            org_id: req.query.org_id
        }
    } else if 
    (req.query["searchBy"] === 'date') {
        dbQuery = {
            eventDate: { $regex: `^${req.query["eventDate"]}`, $options: "i" },
            org_id: req.query.org_id
        }
    } else if
    (req.query["searchBy"] === 'id') {
        dbQuery = {
            _id: req.query.id,
        }
    };
    eventdata.findOneAndDelete(
        dbQuery,
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    )
});
module.exports = router;
