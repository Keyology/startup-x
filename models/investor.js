const mongoose = require('mongoose');
const Schema = mongoose.Schema;

InvestorSchema = new Schema({
    account_id: Schema.Types.ObjectId,

    name:{
        type: String,
        required: true

    }, 
    occupation: String,
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String, 
        required: true, 

    }, 
    companies_invested:[{
        type: Schema.Types.ObjectId,
        ref: 'Startup'
    }],
    registration_date: {
        type: Date,
        default: Date.now
    },
   

    bio: String,
    Age: Number,



    



})



