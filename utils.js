export const filterTasks = (pred) => {
    return (arr) => {
        return arr.filter(pred);
    }
}