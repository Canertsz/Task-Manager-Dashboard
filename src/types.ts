import { getTasks } from "./services/task"

export type TasksPageLoaderResult = ReturnType<typeof getTasks>

export type MenuType = {
    id: number
    icon: React.JSX.Element
    title: string
    href: string
}

export type Task = {
    id: string
    name: string
    description: string
    completed: boolean
}