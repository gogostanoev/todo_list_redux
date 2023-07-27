import { useSelector } from "react-redux";
import "./Counter.scss"

export const Counter = () => {
    const totalTodos = useSelector(({ counterReducer: { totalTodos } }) => totalTodos);
    const completedTodos = useSelector(({ counterReducer: { completedTodos } }) => completedTodos);

    return (
        <div className="counter-container">
            <div className="counter-item">
                <h3>Total Todos: {totalTodos}</h3>
            </div>
            <div className="counter-item">
                <h3>Completed Todos: {completedTodos}</h3>
            </div>
        </div>
    );
};

