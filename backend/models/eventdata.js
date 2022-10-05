const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//collection for eventData
let eventDataSchema = new Schema({
    org_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'org'
    },
    eventName: {
        type: String,
        require: true
    },
    services: {
        type: Array
    },
    date: {
        type: Date,
        required: true
    },
    address: {
        line1: {
            type: String
        },
        line2: {
            type: String,
        },
        city: {
            type: String,
        },
        county: {
            type: String,
        },
        zip: {
            type: String,
        }
    },
    description: {
        type: String,
    },
    attendees: [
        {
            clientID:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "primaryData"
        }
    }]
}, {
    collection: 'eventData'
});

// create models from mongoose schemas
const eventdata = mongoose.model('eventData', eventDataSchema);
// package the models in an object to export 
module.exports = { eventdata }
