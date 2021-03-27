import { TTask } from './../../common/types'
import { logApiData } from '../console'

const fakeTasks = [
  {
    id: '1',
    text: 'Create Userflow Social Application Design 1',
    status: 'Approved',
    type: 'important'
  },
  {
    id: '2',
    text: 'Create Userflow Social Application Design 2',
    status: 'In Progress',
    type: 'important'
  },
  {
    id: '3',
    text: 'Create Userflow Social Application Design 3',
    status: 'In Review',
    type: 'upcoming'
  },
  {
    id: '4',
    text: 'Create Userflow Social Application Design 4',
    status: 'Waiting',
    type: 'upcoming'
  }
]

const getTasksCounts = (): Promise<number[]> => {
  return new Promise<number[]>((resolve) => {
    const tasksCounts: number[] = [0, 0]
    tasksCounts[0] = fakeTasks.length
    fakeTasks.forEach((task) => {
      if (task.type === 'important') {
        tasksCounts[1] += 1
      }
    })
    logApiData('getTasksCounts', 'get', tasksCounts)
    setTimeout(() => resolve(tasksCounts), 10000)
  })
}

const getTasks = (filter?: string): Promise<TTask[]> => {
  return new Promise<TTask[]>((resolve) => {
    if (filter) {
      const tasks = fakeTasks.filter((task) => task.type === filter)
      logApiData('getTasks', 'get', tasks, filter)
      setTimeout(() => resolve(tasks), 10000)
    }
    logApiData('getTasks', 'get', fakeTasks, filter)
    setTimeout(() => resolve(fakeTasks), 10000)
  })
}

const getTask = (id: string): Promise<TTask> => {
  return new Promise<TTask>((resolve) => {
    const task = fakeTasks.find((task) => task.id === id)
    logApiData('getTask', 'get', task, id)
    if (task) setTimeout(() => resolve(task), 10000)
  })
}

const addTask = (task: TTask): Promise<string> => {
  return new Promise<string>((resolve) => {
    task.id = String(fakeTasks.length)
    fakeTasks.push(task)
    logApiData('addTask', 'post', 'ok', task)
    setTimeout(() => resolve('ok'), 10000)
  })
}

/*const updateTask = (task: TTask): Promise<TTask[]> => {
  return new Promise<TTask[]>((resolve) => {
    fakeTasks.push(task)
    setTimeout(() => resolve(fakeTasks), 10000)
  })
}*/

const tasksMock = {
  getTasksCounts,
  getTasks,
  getTask,
  addTask
}

export default tasksMock
