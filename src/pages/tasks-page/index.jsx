import React from "react";
import { getTasks } from "../../services/task/index.js";
import { TasksPageContainer } from "../../containers/tasks-page-container/index.jsx";

function TasksPage() {
    return <TasksPageContainer />
}

export const tasksPageLoader = () => {
    return getTasks();
};

export { TasksPage }