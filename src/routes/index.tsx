import { createBrowserRouter, Navigate } from "react-router";
import { ErrorPage } from "./ErrorPage.tsx";
import { NotFound } from "./NotFound.tsx";
import { Main } from "./Main.tsx";
import { TaskRoot } from "./TaskRoot.tsx";
import { TodoList } from "./TodoList.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <TaskRoot/>,
        children: [
          {
            path: "/",
            element: <Navigate replace to="todos/1"/>, // トップは検索ページに飛ばす
          },
          {
            path: "/main",
            element: <Main/>,
          },
          {
            path: "todos/:todoId",
            element: <TodoList/>,
          },
        ],
      },
      {
        path: "/*",
        element: <NotFound/>,
      },
    ],
  },
]);
