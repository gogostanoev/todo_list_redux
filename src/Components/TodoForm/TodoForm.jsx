import { useDispatch, useSelector } from "react-redux";
import "./TodoForm.scss"

export const TodoForm = () => {
    const dispatch = useDispatch();
    const todoName = useSelector(({ todoReducer: { todoName } }) => todoName);

    const handleChangeTodoName = (e) => {     
        dispatch({ type: "SET_TODO_NAME", payload: e.target.value });
    };

    const handleAddTodo = () => {
        // if(todoName.length === 0) return;

        if (!todoName.trim()) return;

        const todo = {
            id: Date.now(),
            name: todoName,
            isDone: false
        };

        dispatch({ type: "ADD_TODO", payload: todo });
        dispatch({ type: "INCREMENT_TOTAL_TODOS" });
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddTodo();
        };
    };

    return (
        <div className="todoForm">
            <input onChange={handleChangeTodoName} onKeyDown={handleKeyDown} type="text" placeholder="What is the task for today?" value={todoName}/>
            <button onClick={handleAddTodo}>Add Task</button>
        </div>
    )
};