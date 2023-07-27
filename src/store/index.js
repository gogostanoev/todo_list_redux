import { legacy_createStore as createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { counterReducer } from "./reducers/counterReducer";

const rootReducer = combineReducers({
    todoReducer,
    counterReducer
});

const persistedTodoState = JSON.parse(localStorage.getItem("todoAppState"));
const persistedCounterState = JSON.parse(localStorage.getItem("counterAppState"));

const initialTodoState = persistedTodoState || { todoName: "", todos: [] };
const initialCounterState = persistedCounterState || { totalTodos: 0, completedTodos: 0 };

const store = createStore(rootReducer, {
  todoReducer: initialTodoState,
  counterReducer: initialCounterState,
});

store.subscribe(() => {
  const { todoReducer, counterReducer } = store.getState();
  localStorage.setItem("todoAppState", JSON.stringify(todoReducer));
  localStorage.setItem("counterAppState", JSON.stringify(counterReducer));
});

export default store;