import {Task} from "./task.js";
import { createTaskManager } from "./taskManager.js";
import { filterTasks,mapTasks,compose,withLogging } from "./utils.js";


const manager= withLogging(createTaskManager,"CREATING A TASK MANAGER");
const mainman = manager();


const createTask = (title) =>{
    return mainman.addTask(title);
}

const listTask = () =>{
    return mainman.getTask();
}

const completeTask = (id) =>{
    return mainman.completeTask(id);
}

const removeTask = (id) =>{
    return mainman.deleteTask(id);
}

const completedTaskTitles = () =>{
    const pipeline = compose(mapTasks(t=>t.title),filterTasks(t=>t.completed));
    const allTasks = mainman.getTask()
    const result = pipeline(allTasks);
    return result;


}


/*
const task1 = mainman.addTask("Build mini Project");
console.log(task1);
const task2 = manager.addTask("Learn Closures");


console.log(manager.getTask());
//console.log(manager.completeTask(task1.id));
//console.log(manager.deleteTask(task2.id));
//console.log(manager.getTask());

const arre = manager.getTask();
const filt = compose(mapTasks(t=>t.title),filterTasks(t=>t.completed));
const result = filt(arre);
console.log(result);
console.log(arre);
*/
