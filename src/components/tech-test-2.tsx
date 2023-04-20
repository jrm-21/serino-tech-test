import React, { ReactNode, useReducer, useState } from "react";
import ReactDOM from "react-dom/client";

const todosData: never[] = [];

const todosReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo: any) => todo !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todosReducer, todosData);
  const [newId, setId] = useState(1);

  const handleAdd = (currentValue: string) => {
    setId(newId + 1);
    dispatch({
      type: "ADD_TODO",
      payload: { complete: false, task: currentValue, id: newId },
    });
  };

  const handleRemove = (todo: any) => {
    dispatch({ type: "REMOVE_TODO", payload: todo });
  };

  return (
    <div>
      <button onClick={() => handleAdd("New Todo")}>Add todo</button>
      <ul>
        {todos.map(
          (todo: any, index: any) =>
            !todo.complete && (
              <li key={index}>
                {todo.task + " " + todo.id + " "}
                <button onClick={() => handleRemove(todo)}>Remove todo</button>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
