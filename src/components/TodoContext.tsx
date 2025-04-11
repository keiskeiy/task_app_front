import { createContext, useContext, useState } from "react";

export type AllTodoList = {
  [id: string]: { title: string }[]
};

type TodoContextType = {
  allTodoList: AllTodoList;
  setAllTodoList: React.Dispatch<React.SetStateAction<AllTodoList>>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allTodoList, setAllTodoList] = useState<AllTodoList>({});

  return (
    <TodoContext.Provider value={{ allTodoList, setAllTodoList }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};