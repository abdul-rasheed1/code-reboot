export const filterTasks = (pred) => {
    return (arr) => {
        return arr.filter(pred);
    }
}



export const mapTasks = (mapper) =>{
    return (arr) =>{
        return arr.map(mapper);
    }
}