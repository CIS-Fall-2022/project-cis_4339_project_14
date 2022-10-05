const express = require("express"); 
const router = express.Router(); 

//importing data model schemas
// Eduardo: Honestly we should not be exposing GET / 
// to return all data
// We should add 
let { primarydata } = require("../models/primarydata"); 
let { eventdata } = require("../models/eventdata"); 

//GET all entries
router.get("/", (req, res, next) => { 
    primarydata.find( 
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    ).sort({ 'updatedAt': -1 }).limit(10);
});

//GET single entry by ID
router.get("/id/:id", (req, res, next) => {
    primarydata.find( 
        { _id: req.params.id }, 
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

//GET read endpoint to use a query papermeter studentID or for all clients entries
router.get('/', (req, res, next) => {
    //checking whether a query parameter is used in the request
    if (req.query.clientid) {
        primarydata.findOne({ clientID: req.query.clientid }, (error, data) => {
            if (error) {
                return next(error)
            } else if (data === null) {
                // Sending 404 when not found something is a good practice
                res.status(404).send('Client not found');
            }
            else {
                res.json(data)
            }
        });
    } else {
        //very plain way to get all the data from the collection through the mongoose schema
        primarydata.find((error, data) => {
            if (error) {
                //here we are using a call to next() to send an error message back
                return next(error)
            } else {
                res.json(data)
            }
        })
    }
});

//GET entries based on search query
//Ex: '...?firstName=Bob&lastName=&searchBy=name' 
// Eduardo: Note that this should return ALL orgs since there's not a filter by that
router.get("/search/", (req, res, next) => { 
    let dbQuery = "";
    if (req.query["searchBy"] === 'name') {
        dbQuery = { firstName: { $regex: `^${req.query["firstName"]}`, $options: "i" }, lastName: { $regex: `^${req.query["lastName"]}`, $options: "i" } }
    } else if (req.query["searchBy"] === 'number') {
        dbQuery = {
            "phoneNumbers.primaryPhone": { $regex: `^${req.query["phoneNumbers.primaryPhone"]}`, $options: "i" }
        }
    };
    primarydata.find( 
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

//GET events for a single client
router.get("/events/:id", (req, res, next) => { 
    eventdata.find( 
        {clientID: req.params.clientid }, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

//GET org for a single client
router.get("/org/:orgid", (req, res, next) => { 
    primarydata.find( 
        {org_id: req.params.orgid}, 
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
    primarydata.create( 
        req.body,
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                res.json(data); 
            }
        }
    );
    primarydata.createdAt;
    primarydata.updatedAt;
    primarydata.createdAt instanceof Date;
});

//PUT update (make sure req body doesn't have the id)
router.put("/:id", (req, res, next) => { 
    primarydata.findOneAndUpdate( 
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


// Delete Guest by single entry by ID
// Eduardo : maybe make the deletion a little more informative
// So, let's not use ID as the path
// instead, let's do a route to delete with the URI being /delete
router.delete("/delete/:id", (req, res, next) => { 
    primarydata.deleteOne({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Delete guest by using their phone number (this is only for debugging purposes)
// aka to make deletion faster
// Eduardo: As I did with the delete on the last route
// We can delete here by the phone number provided on the parameters
// However, note that you cannot differentiate between MORE or OTHER customers 
// With the same phone number
// Unless you add more parameters
// We should probably add a parameter like org since maybe a user can exist
// Between multiple orgs
router.delete("/delete/", (req, res, next) => { 
    let dbQuery = {"phoneNumbers.primaryPhone": { $regex: `^${req.query["phoneNumbers.primaryPhone"]}`, $options: "i" }}
    primarydata.findOneAndDelete(
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
