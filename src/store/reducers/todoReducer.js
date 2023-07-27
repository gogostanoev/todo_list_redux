const initialState = {
    todoName: "",
    todos: [],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TODO_NAME":
            return {
                ...state,
                todoName: action.payload,
            };

        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todoName: "",
            };

        case "REMOVE_TODO":
            return {
                ...state,
                todos: action.payload,
            };

        case "UPDATE_TODOS":
            return {
                ...state,
                todos: action.payload,
            };

        default:
            return state;
    }
};
