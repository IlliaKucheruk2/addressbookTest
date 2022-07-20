const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    img:{
        data: Buffer,
        contentType: String
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    }

})

const Userdb = mongoose.model('userdb',schema)