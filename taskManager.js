import {Task} from './task.js'

export const createTaskManager = () =>{
    const tasks = [];

    return {
        addTask(title){
            const newTask = new Task(title);
            tasks.push(newTask);
            return tasks.at(-1);
        },

        getTask(){
            return [...tasks];
        },

        completeTask(id){
            const obj = tasks.find(idn => idn["id"]===id);
            obj.completed();
            return obj;
        },

        deleteTask(id){
            const objectIndex = tasks.findIndex(ind => ind.id===id);
           // tasks.splice(objectIndex,1);
            if (objectIndex !== -1){
                tasks.splice(objectIndex,1)
                return true;
            
            }
            else{
                return false;
            }
        },
        findbyId(id){
            return tasks.find(i => i.id === id)
        }
    }

}