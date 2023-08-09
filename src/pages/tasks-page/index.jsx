import React from "react";

function TasksPage() {
    return <div>TasksPage</div>
}

const taskPageLoader = (params) => {
    console.log("here", params)
    return null
}

export { TasksPage, taskPageLoader }