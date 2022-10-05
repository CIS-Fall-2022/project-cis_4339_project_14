const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
const org = mongoose.model('org', orgSchema );
// package the models in an object to export 
module.exports = { org }
