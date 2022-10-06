const express = require("express");
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

/* //GET single entry by ID
router.get("/id/:id", (req, res, next) => { 
    eventdata.find({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
}); */

//GET entries based on search query
//Ex: '...?eventName=Food&searchBy=name' 
router.get("/search/", (req, res, next) => { 
    let dbQuery = "";
    if 
    (req.query["searchBy"] === 'name') {
        dbQuery = { 
            eventName: { $regex: `^${req.query["eventName"]}`, $options: "i" } 
        }
    } else if 
    (req.query["searchBy"] === 'date') {
        dbQuery = {
            date:  req.query["eventDate"]
        }
    } else if 
    (req.query["searchBy" === 'client']) {
            dbQuery = {
                attendees: req.query.id
            }
    } else if
    (req.query["searchBy" === 'org']) {
        dbQuery = {
            org_id: req.query.org_id
        }
    }else if 
    (req.query["searchBy" === 'id']) {
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

//GET events for which a client is signed up
// Eduardo: This can be consolidated into the search function
/* router.get("/client/:id", (req, res, next) => { 
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
});

router.get("/org/:orgid", (req, res, next) => { 
    eventdata.find( 
        {org_id: req.params.orgid}, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
}); */


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

/* //PUT
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
}); */

router.put("/update/", (req, res, next) => {
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
    eventdata.findOneAndUpdate( 
        {dbQuery}, 
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

//GET events for a single client
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
