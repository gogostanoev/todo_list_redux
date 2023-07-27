import { useDispatch, useSelector } from "react-redux"
import { TodoForm } from "../../Components/TodoForm/TodoForm"
import { Counter } from "../../Components/Counter/Counter";
import "./Todo.scss";
// import todoImage from "../Todo/images/todo.png";

export const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(({ todoReducer: { todos } }) => todos);

    const handleDeleteTodo = (todoId) => {
        const filteredTodo = todos.filter((todo) => todo.id !== todoId);
        const deletedTodo = todos.find((todo) => todo.id === todoId);

        dispatch({ type: "REMOVE_TODO", payload: filteredTodo });
        dispatch({ type: "DECREMENT_TOTAL_TODOS" });
        // console.log(filteredTodo);

        if (deletedTodo.isDone) {
            dispatch({ type: "DECREMENT_COMPLETED_TODOS" });
        }
    };

    const handleToggleTodo = (todoId) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    isDone: !todo.isDone,
                };
            }
            return todo;
        });

        dispatch({ type: "UPDATE_TODOS", payload: updatedTodos });

        if (updatedTodos.find((todo) => todo.id === todoId).isDone) {
            dispatch({ type: "INCREMENT_COMPLETED_TODOS" });
        } else {
            dispatch({ type: "DECREMENT_COMPLETED_TODOS" });
        }
    };

    return (
        <div>
            <div className="todo-container">
                <Counter />
                <div className="heading-container">
                    <h1>To-Do List</h1>
                    <img src="/images/todo.png" alt="todo image" />
                </div>
                <TodoForm />

                {todos.length ? (
                    <div className="todo-items-container">
                        {todos.map((todo) => (
                            <div className={`div-container ${todo.isDone ? "completed" : ""}`} key={todo.id}>
                                <div className="todo-text">
                                    <h3>{todo.name}</h3>
                                </div>
                                <div className="actions">
                                    <input
                                        type="checkbox"
                                        checked={todo.isDone}
                                        onChange={() => handleToggleTodo(todo.id)}
                                    />
                                    <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-tasks">Currently there are no tasks!</div>
                )}
            </div>
        </div>
    )
};