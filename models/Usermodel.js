const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
   
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    
    },
    password: {
        type: String,
      required: true,
    },
    dob: {
        type: Date,
       required: true,
    },
    pnum: {
         type: String,
       required: true,
    }
}, {
    timestamps: true
})
module.exports=mongoose.model('UserTable',userSchema)