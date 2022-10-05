const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//collection for intakeData
let primaryDataSchema = new Schema({
    // This is a reference to the organization collection
    clientID: {
        type: Number,
        required: true,
        unique: true
    },
    org_id: {
        type: mongoose.Schema.Types.ObjectId,
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


// create models from mongoose schemas
const primarydata = mongoose.model('primaryData', primaryDataSchema);
// package the models in an object to export 
module.exports = { primarydata }
