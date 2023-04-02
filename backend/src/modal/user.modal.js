const mongoose = require('mongoose');
const userSchema = new  mongoose.Schema({
    email : {type: String, required : true},
    password : {type:String,
        required:true,
        unique:true,
        min:8},
        count_incorrect: {
            type: Number,
            default: 0,
          },
          blocked_until: {
            type: Date,
            default: null,
          },
});

const User = mongoose.model('user', userSchema);
module.exports = User;