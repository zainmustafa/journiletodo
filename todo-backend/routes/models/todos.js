const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type: String,
        required :true,
        minLength: 20
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    
});
module.exports = mongoose.model('Task', TaskSchema);