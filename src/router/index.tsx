import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "../layouts/main-layout/index.tsx"
import { HomePage } from "../pages/home-page/index.tsx"
import { TasksPage, tasksPageLoader } from "../pages/tasks-page/index.tsx"
import {
  CreateTaskPage,
  createTaskPageSubmitAction,
} from "../pages/create-task-page/index.tsx"
import { TaskDetailPage } from "../pages/task-detail-page/index.tsx"
import { NoMatch } from "../components/no-match/index.tsx"

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tasks",
        element: <TasksPage />,
        loader: tasksPageLoader,
      },
      {
        path: "/tasks/create",
        element: <CreateTaskPage />,
        action: createTaskPageSubmitAction,
      },
      {
        path: "/tasks/:id",
        element: <TaskDetailPage />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
])
