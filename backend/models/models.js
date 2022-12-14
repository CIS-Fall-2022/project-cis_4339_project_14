const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//collection for intakeData
let primaryDataSchema = new Schema({
    // This is a reference to the organization collection
    org_id: {
        type: mongoose.Types.ObjectId,
        ref: 'org'
    },
    firstName: {
        type: String,
        require: true
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phoneNumbers: {
        type: Array,
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
            required: true
        },
        county: {
            type: String,
        },
        zip: {
            type: String,
        }
    }
}, {
    collection: 'primaryData',
    timestamps: true
});

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
    attendees: [{
        type: String,
    }]
}, {
    collection: 'eventData'
});

//collection for Organization
// This collection will have different organization names
let orgSchema = new Schema({
    org_id: { 
        type: Number, 
        required: true
    },
    orgName: {
        type: String,
        require: true
    },
}, {
    collection: 'org'
});

// create models from mongoose schemas
const primarydata = mongoose.model('primaryData', primaryDataSchema);
const eventdata = mongoose.model('eventData', eventDataSchema);
const org = mongoose.model('org', orgSchema );
// package the models in an object to export 
module.exports = { primarydata, eventdata, org }
