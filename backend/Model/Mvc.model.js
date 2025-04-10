const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Next");





const nextSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    skill: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const nextModel = mongoose.model('registration', nextSchema);

const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },

});

const taskModel = mongoose.model("TaskTable", taskSchema);



const todoSchema = new mongoose.Schema({
    todoName:{
        type: String,
        required: true,
    },
    todoProject:{
        type: String,
        required: true,
    },

});

const todoModel = mongoose.model("todoTable", todoSchema);



module.exports = {
    nextModel: nextModel,
    taskModel: taskModel,
    todoModel: todoModel
};
