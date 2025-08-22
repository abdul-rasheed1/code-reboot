import {Task} from './task.js'

export const createTaskManager = () =>{
    const task = [];

    return {
        addTask(title){
            const tasc = new Task(title);
            task.push(tasc);
            return task;
        },

        getTask(){
            return [...task];
        }
    }

}