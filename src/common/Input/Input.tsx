import React from 'react'
import { InputStyles } from './styles'

export const Input = (props: any) => {
  console.group('input')
  console.log(props)
  console.groupEnd()
  return <InputStyles {...props} />
}
