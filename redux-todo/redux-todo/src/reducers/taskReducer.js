import { ADD_TASK, TOGGLE_COMPLETE } from '../actions';

const initialState = {
    tasks: [
        {task: 'Wash the car', complete: false},
        {task: "Laundry", complete: false}
    ]
}

export const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state, tasks: [
                    ...state.tasks, { task: action.payload, complete: false}
                ]
            }

        case TOGGLE_COMPLETE:
           return {
               ...state, tasks: state.tasks.map((item, index) => {
               if(action.payload === index) {
                   return {
                       ...item, complete: !item.complete
                   }
               } else {
                   return item;
               }
           })
        }
        default: 
            return state;
    }
}