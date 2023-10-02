import React from "react"
import { getTasks } from "../../services/task/index.js"
import { TasksPageContainer } from "../../containers/tasks-page-container/index.jsx"
import { TasksPageLoaderResult } from "../../types.js"

interface TasksPageProps {}

function TasksPage(props: TasksPageProps): JSX.Element {
  return <TasksPageContainer />
}

export const tasksPageLoader = (): TasksPageLoaderResult => {
  return getTasks()
}

export { TasksPage }
