export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addNewTask = task => {
    console.log("clicked!", task);
    return {
        //action must have a type
        type: ADD_TASK,
        payload: task
    }
}

export const toggleTask = index => {
    console.log("clicked!", index);
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    }
}

