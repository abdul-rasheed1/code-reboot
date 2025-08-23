import {Task} from "./task.js"
import { createTaskManager } from "./taskManager.js";

const manager= createTaskManager();

const task1 = manager.addTask("Build mini Project");
const task2 = manager.addTask("Learn Closures");


console.log(manager.getTask());
//console.log(manager.completeTask(task1.id));
console.log(manager.deleteTask(task2.id));
console.log(manager.getTask());

