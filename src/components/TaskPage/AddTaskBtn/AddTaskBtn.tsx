import React from 'react'
import { AddTaskBtnStyled } from './styles'

interface IAddTaskBtnProps extends React.HTMLAttributes<HTMLDivElement> {
  openModal(e: React.MouseEvent<HTMLButtonElement>): void
}

export const AddTaskBtn = (props: IAddTaskBtnProps): JSX.Element => {
  const { openModal } = props
  return <AddTaskBtnStyled aria-label="Add task" onClick={openModal}></AddTaskBtnStyled>
}
