import React from 'react'
import { TasksStyled } from './styles';
import { Task } from '../Task/Task'
import { Text } from '../../common/Text/Text'

export const Tasks = () => {
    var fakeTasks = [{
        text: 'Create Userflow Social Application Design',
        status: 'Approved'
    },{
        text: 'Create Userflow Social Application Design',
        status: 'In Progress'
    },{
        text: 'Create Userflow Social Application Design',
        status: 'In Review'
    },{
        text: 'Create Userflow Social Application Design',
        status: 'Waiting'
    }]
    return (
        <TasksStyled>
            {fakeTasks
            ? fakeTasks.map(task => {
                console.log(task);
                return <Task {...task}/>
            })
            : <Text>У вас нет задач</Text>}
        </TasksStyled>
    )
}