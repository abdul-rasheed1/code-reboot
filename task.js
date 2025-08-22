export class Task {
    constructor(title){
        this.title = title,
        this.id = Task.genid(),
        this.complet = false
    }

   static countid = 0;
    static genid (){
        return Task.countid++;
    
    }

    completed (){
        return this.complet = true;
    }
    
}