import { Task } from "../../types"

export const waitFor = async (data: any, ms: number = 500) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, ms)
  })

export const getTasks = async () => {
  const tasksJSON = localStorage.getItem("tasks")
  const tasks = tasksJSON ? JSON.parse(tasksJSON) : []
  return waitFor(tasks)
}

export const addTask = async (task: Task) => {
  const tasksJSON = localStorage.getItem("tasks")
  const tasks = tasksJSON ? JSON.parse(tasksJSON) : []
  tasks.push(task)
  localStorage.setItem("tasks", JSON.stringify(tasks))
  return waitFor(task)
}

export const deleteTask = async (id: string) => {
  const tasksJSON = localStorage.getItem("tasks")
  const tasks = tasksJSON ? JSON.parse(tasksJSON) : []
  const newTasks = tasks.filter((task: Task) => task.id !== id)
  localStorage.setItem("tasks", JSON.stringify(newTasks))
  return waitFor(newTasks)
}

export const completeTask = async (id: string) => {
  const tasksJSON = localStorage.getItem("tasks")
  const tasks = tasksJSON ? JSON.parse(tasksJSON) : []
  const task = tasks.find((task: Task) => task.id === id)
  task.completed = !task.completed
  localStorage.setItem("tasks", JSON.stringify(tasks))
  return waitFor(task)
}

export const getTask = async (id: string) => {
  const tasksJSON = localStorage.getItem("tasks")
  const tasks = tasksJSON ? JSON.parse(tasksJSON) : []
  const task = tasks.find((task: Task) => task.id === id)
  return waitFor(task)
}

export const updateTask = async (task: Task) => {
  const tasksJSON = localStorage.getItem("tasks")
  const tasks = tasksJSON ? JSON.parse(tasksJSON) : []
  const index = tasks.findIndex((storedTask: Task) => storedTask.id === task.id)
  tasks[index] = task
  localStorage.setItem("tasks", JSON.stringify(tasks))
  return waitFor(task)
}