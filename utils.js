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

export const compose = (f,g) =>{
    return (x) => f(g(x));
}

export const withLogging = (fn,label) => {
    return (...args) => {
        console.log(`START ${label}`);
        const res = fn(...args)
        console.log(`END ${label}`);
        return res;
    }

}