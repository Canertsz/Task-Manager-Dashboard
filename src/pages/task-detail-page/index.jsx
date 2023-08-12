import React from "react";
import {TaskDetailPageContainer} from "../../containers/task-detail-page-container/index.jsx";
import {getTasks} from "../../services/task/index.js";

function TaskDetailPage() {
    return <TaskDetailPageContainer />
}

const taskDetailPageLoader = async ({ params }) => {
    return getTasks(params.id)
}

export { TaskDetailPage, taskDetailPageLoader }