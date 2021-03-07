import React, { useState } from 'react'
import { CheckboxLabelStyled } from './styles'

export interface ICheckboxProps extends React.HTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode
  checkboxId: string
}

export const Checkbox = ({ checkboxId, ...rest }: ICheckboxProps): JSX.Element => {
  const [checked, setChecked] = useState(false)
  const id = checkboxId ? checkboxId : `checkbox_${Math.random().toString().replace(/0\./, '')}`
  const ariaLabel = checked ? 'Uncheck task with id' + checkboxId : 'Check task with id' + checkboxId
  const handleChange = () => {
    checked ? setChecked(false) : setChecked(true)
  }

  return (
    <>
      <CheckboxLabelStyled htmlFor={id} checked={checked} aria-label={ariaLabel} {...rest}>
        <input id={id} type="checkbox" onChange={handleChange} checked={checked} style={{ display: 'none' }} />
      </CheckboxLabelStyled>
    </>
  )
}
