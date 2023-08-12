import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/main-layout/index.jsx";
import { HomePage } from "../pages/home-page/index.jsx";
import { TasksPage, tasksPageLoader } from "../pages/tasks-page/index.jsx";
import { CreateTaskPage, createTaskPageSubmitAction } from "../pages/create-task-page/index.jsx";
import {TaskDetailPage} from "../pages/task-detail-page/index.jsx";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/tasks",
                element: <TasksPage />,
                loader: tasksPageLoader
            },
            {
                path: "/tasks/create",
                element: <CreateTaskPage />,
                action: createTaskPageSubmitAction
            },
            {
                path: "/tasks/:id",
                element: <TaskDetailPage />
            }
        ]
    }
])