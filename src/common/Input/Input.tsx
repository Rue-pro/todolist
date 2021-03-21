import React from 'react'
import { InputStyles } from './styles'

export interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
}

const Input = (props: IInputProps): JSX.Element => <InputStyles {...props} />

export default Input
