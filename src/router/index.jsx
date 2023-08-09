import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/main-layout/index.jsx";
import { HomePage } from "../pages/home-page/index.jsx";
import { TasksPage, taskPageLoader } from "../pages/tasks-page/index.jsx";

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
                loader: taskPageLoader
            }
        ]
    }
])