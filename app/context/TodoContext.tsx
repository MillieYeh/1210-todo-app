import React, { createContext, useState } from "react";

interface TodoContextProps {
  todos: string[];
  addTodo: (text: string) => void;
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, text]);
  };

  const value: TodoContextProps = {
    todos,
    addTodo,
  };

  return (
    <TodoContext.Provider value={undefined}>
      {props.children}
    </TodoContext.Provider>
  );
};