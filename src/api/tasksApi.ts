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

export const getTasks = (): Promise<TTask[]> => {
  return new Promise<TTask[]>((resolve) => {
    setTimeout(() => resolve(fakeTasks), 10000)
  })
}

const tasks = {
  getTasks
}

export default tasks
