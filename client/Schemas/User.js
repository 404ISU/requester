const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    organizationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Organization'},
    name: {type: String, required: true},
    email: {type: String, required: true},
    passwordHash: {type: String, required: true},
    role: {type: String, enum: ['admin', 'organization', 'employee'], default: 'employee'},
    createdAt: {type: Date, default: Date.now}
});

const User= mongoose.model('User', userSchema);
module.exports=User;
