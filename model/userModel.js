var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        // unique: true
    },
    phoneNo: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    role: {
        type: String,
        required: true
    }
})




module.exports = User = mongoose.model('User', UserSchema);;