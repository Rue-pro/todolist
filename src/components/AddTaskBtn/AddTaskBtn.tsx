import React, { useState } from 'react'
import { AddTaskBtnStyled } from './styles'

export const AddTaskBtn = (props: any) => {
  const { clickAddTaskBtnHandler } = props
  return <AddTaskBtnStyled onClick={clickAddTaskBtnHandler}></AddTaskBtnStyled>
}
