const mongoose = require("mongoose")

const Schema = mongoose.Schema

const mySchema = new Schema({
    name:{
        type:String,
        required:true,
    }
});
   

const MyModel = mongoose.model('user', mySchema);
module.exports = MyModel