const mongoose = require('mongoose');

const organizationSchema= new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    passwordHash: {type:String, required: true},
    createdAt: {type: Date, default: Date.now}
});


const Organization = mongoose.model('Organization', organizationSchema);
module.exports=Organization;