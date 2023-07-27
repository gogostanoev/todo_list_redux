const initialState = {
    totalTodos: 0,
    completedTodos: 0
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_TOTAL_TODOS":
            return {
                ...state,
                totalTodos: state.totalTodos + 1
            };

        case "INCREMENT_COMPLETED_TODOS":
            return {
                ...state,
                completedTodos: state.completedTodos + 1
            };

        case "DECREMENT_TOTAL_TODOS":
            return {
                ...state,
                totalTodos: state.totalTodos - 1
            };

        case "DECREMENT_COMPLETED_TODOS":
            return {
                ...state,
                completedTodos: state.completedTodos - 1
            }
    
        default:
            return state;
    };
};