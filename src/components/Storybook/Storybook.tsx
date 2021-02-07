import React from 'react'
import { Colors } from './Colors/Colors'
import { Buttons } from './Buttons/Buttons'
import { Typography } from './Typography/Typography'

export const Storybook = (): React.ReactElement => {
  return (
    <>
      <Colors />
      <Typography />
      <Buttons />
    </>
  )
}
