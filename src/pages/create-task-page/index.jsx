import React from "react";
import { CreateTaskPageContainer } from "../../containers/create-task-page-container/index.jsx";
import { addTask } from "../../services/task/index.js";
import {redirect} from "react-router-dom";

function CreateTaskPage() {
    return <CreateTaskPageContainer />
}

export const createTaskPageSubmitAction = async ({ request }) => {
    const formData = await request.formData()

    const id = Math.random().toString(36).substring(3, 12)
    const name = formData.get("task-name")
    const description = formData.get("task-description")

    await addTask({
        id,
        name,
        description,
        completed: false
    })

    return redirect(`/tasks/${id}`)
}

export { CreateTaskPage }