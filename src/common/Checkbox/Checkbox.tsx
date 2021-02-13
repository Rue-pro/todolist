import React, { useState } from 'react'
import { CheckboxLabelStyled } from './styles'

export interface ICheckboxProps extends React.HTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode
  checkboxId: string
}

export const Checkbox = ({ checkboxId, ...rest }: ICheckboxProps): JSX.Element => {
  const [checked, setChecked] = useState(false)
  const id = checkboxId ? checkboxId : `checkbox_${Math.random().toString().replace(/0\./, '')}`
  const handleChange = () => {
    checked ? setChecked(false) : setChecked(true)
  }

  return (
    <>
      <input id={id} type="checkbox" onChange={handleChange} checked={checked} style={{ display: 'none' }} />
      <CheckboxLabelStyled htmlFor={id} checked={checked} {...rest}></CheckboxLabelStyled>
    </>
  )
}
