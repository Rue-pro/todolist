import tasks from './tasksApi'

const mockAPI = {
  tasks
}
const serverAPI = {
  getCategories: () => fetch('/categories'),
  getCategory: (id) => fetch('/categories/' + id)
}
const api = mockAPI

export default api
