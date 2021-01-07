import React, { useRef, useState } from 'react'
import { SelectStyles, SelectSelectedValStyles, SelectOptionsStyles, SelectOptionStyles } from './styles'

export const Select = (props: any) => {
  const selectedRef = useRef<HTMLCanvasElement>(null)
  const optionsRef = useRef<HTMLCanvasElement>(null)

  const [selected, setSelected] = useState(props.options[0].valueText)
  const [showOptions, setShowOptions] = useState(false)

  const openOptions = () => {
    showOptions ? setShowOptions(false) : setShowOptions(true)
  }
  const selectOption = (e: any) => {
    setSelected(e.target.innerHTML)
    setShowOptions(false)
  }

  return props.options ? (
    <SelectStyles>
      <SelectSelectedValStyles onClick={openOptions}>{selected}</SelectSelectedValStyles>
      {showOptions && (
        <SelectOptionsStyles>
          {props.options.map((option: any) => (
            <SelectOptionStyles onClick={selectOption} key={option.value} data-value={option.value}>
              {option.valueText}
            </SelectOptionStyles>
          ))}
        </SelectOptionsStyles>
      )}
    </SelectStyles>
  ) : (
    'Нет элементов для выбора'
  )
}