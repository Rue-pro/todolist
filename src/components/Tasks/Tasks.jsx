import React from 'react'
import { TasksStyled } from './styles';
import { Task } from '../Task/Task'
import { Text } from '../../common/Text/Text'

export const Tasks = () => {
    var fakeTasks = [{
        id: 1,
        text: 'Create Userflow Social Application Design',
        status: 'Approved',
        type: 'important'
    },{
        id: 2,
        text: 'Create Userflow Social Application Design',
        status: 'In Progress',
        type: 'important'
    },{
        id: 3,
        text: 'Create Userflow Social Application Design',
        status: 'In Review',
        type: 'upcoming'
    },{
        id: 4,
        text: 'Create Userflow Social Application Design',
        status: 'Waiting',
        type: 'upcoming'
    }]
    return (
        <TasksStyled>
            {fakeTasks
            ? fakeTasks.map(task => {
                return <Task key={'task_'+task.id} {...task}/>
            })
            : <Text>У вас нет задач</Text>}
        </TasksStyled>
    )
}