import { TTask } from '../common/types'

const fakeTasks = [
  {
    id: 1,
    text: 'Create Userflow Social Application Design 1',
    status: 'Approved',
    type: 'important'
  },
  {
    id: 2,
    text: 'Create Userflow Social Application Design 2',
    status: 'In Progress',
    type: 'important'
  },
  {
    id: 3,
    text: 'Create Userflow Social Application Design 3',
    status: 'In Review',
    type: 'upcoming'
  },
  {
    id: 4,
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

    setTimeout(() => resolve(tasksCounts), 10000)
  })
}

const getTasks = (filter?: string): Promise<TTask[]> => {
  return new Promise<TTask[]>((resolve) => {
    if (filter) {
      const tasks = fakeTasks.filter((task) => task.type === filter)
      setTimeout(() => resolve(tasks), 10000)
    }
    setTimeout(() => resolve(fakeTasks), 10000)
  })
}

const getTask = (id: number): Promise<TTask> => {
  return new Promise<TTask>((resolve) => {
    const task = fakeTasks.find((task) => task.id === id)
    if (task) setTimeout(() => resolve(task), 10000)
  })
}

const setTask = (task: TTask): Promise<string> => {
  return new Promise<string>((resolve) => {
    fakeTasks.push(task)
    setTimeout(() => resolve('ok'), 10000)
  })
}

const updateTask = (task: TTask): Promise<TTask[]> => {
  return new Promise<TTask[]>((resolve) => {
    fakeTasks.push(task)
    setTimeout(() => resolve(fakeTasks), 10000)
  })
}

const tasks = {
  getTasksCounts,
  getTasks
}

export default tasks
