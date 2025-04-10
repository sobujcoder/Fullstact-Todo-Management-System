const express = require('express');
const router = express.Router();

const { getCreate, getreRead, getDelete, getLogin, getTask, getTaskDelete, getTodoCreate, getTodoDelete, getTodoUpdate } = require('../Controller/Mvc.controller');

router.post("/create", getCreate);

router.get("/getRead", getreRead);

router.delete("/deleteData/:id", getDelete);

router.post("/login", getLogin);

router.post("/task", getTask);

router.delete("/taskRemove/:id", getTaskDelete);

router.post("/todoCreate", getTodoCreate);


router.delete("/todoRemove/:id", getTodoDelete);

router.put("/todoUpdate/:id", getTodoUpdate);



module.exports = router;
