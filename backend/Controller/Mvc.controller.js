const { nextModel, taskModel, todoModel } = require('../Model/Mvc.model');





exports.getCreate = async (req, res) => {
    try {
        const nextObject = new nextModel({
            name: req.body.name,
            address: req.body.address,
            skill: req.body.skill,
            email: req.body.email,
            password: req.body.password,
        });

        const pData = await nextObject.save();
        res.send(pData);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
};

exports.getreRead =async(req, res)=>{
    try{
        const reDe = await nextModel.find();
        res.send(reDe);

    }catch(error){
        console.log(error.message);
    }
}

exports.getDelete =async(req, res)=>{
    const userId = req.params.id;
    try{

        await nextModel.findByIdAndDelete(userId);
        res.json({success: true});

    


    }catch(error){
        console.log(error.message);
    }
}

exports.getLogin = async(req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const user = await nextModel.findOne({email});
        if(user.password===password){
            return res.json({success: true});
        }else{
            return res.json({success: false});
        }

    }catch(error){
        console.log(error.message);
    }
}


// Backend MVC Controller


exports.getTask = async (req, res) => {
    try {
        const taskObject = new taskModel({
            task: req.body.task,
            description: req.body.description,
        });

        const taskData = await taskObject.save();
        res.send(taskData);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
};

exports.getTaskDelete =async(req, res)=>{
    const taskId = req.params.id;
    try{

        await taskModel.findByIdAndDelete(taskId);
        res.json({success: true});

    


    }catch(error){
        console.log(error.message);
    }
}



exports.getTodoCreate = async (req, res) => {
    try {
        const todoObject = new todoModel({
            todoName: req.body.todoName,
            todoProject: req.body.todoProject,
            
        });

        const todoData = await todoObject.save();
        res.send(todoData);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
};


exports.getTodoDelete =async(req, res)=>{
    const taskId = req.params.id;
    try{

        await todoModel.findByIdAndDelete(taskId);
        res.json({success: true});

    


    }catch(error){
        console.log(error.message);
    }
}

exports.getTodoUpdate= async(req, res)=>{
    try{
        const { id } = req.params;
    const { todoName, todoProject } = req.body;
    const updatedTodo = await todoModel.findByIdAndUpdate(id, { todoName, todoProject }, { new: true });

    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(updatedTodo);
    
    }catch(error){
        console.log(error.message);
    }
}

