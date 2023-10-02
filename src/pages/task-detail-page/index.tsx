import React from "react"
import { TaskDetailPageContainer } from "../../containers/task-detail-page-container/index.jsx"
import { getTasks } from "../../services/task/index.js"

interface TaskDetailPageProps {}

function TaskDetailPage(props: TaskDetailPageProps): JSX.Element {
  return <TaskDetailPageContainer />
}

const taskDetailPageLoader = async () => {
  return getTasks()
}

export { TaskDetailPage, taskDetailPageLoader }
