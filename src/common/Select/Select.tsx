import React, { useState } from 'react'
import { SelectStyles, SelectSelectedValStyles, SelectOptionsStyles, SelectOptionStyles } from './styles'

export type TSelectOption = {
  value: string
  text: string
}

export interface ISelectProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  options: Array<TSelectOption>
}

export const Select = (props: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState({
    value: props.options[0].value,
    text: props.options[0].text
  })
  const [showOptions, setShowOptions] = useState(false)

  const toggleOptions = () => {
    showOptions ? setShowOptions(false) : setShowOptions(true)
  }
  const closeOptions = () => {
    setShowOptions(false)
  }
  const selectOption = (e: React.MouseEvent<HTMLSpanElement>): void => {
    const selected = e.currentTarget.dataset.value || props.options[0].text
    setSelected({
      value: selected,
      text: e.currentTarget.innerHTML
    })
    setShowOptions(false)
  }

  return props.options ? (
    <>
      <select className="myselect1" style={{ display: 'none' }} value={selected.value}>
        {props.options.map((option: TSelectOption) => {
          return (
            <option key={option.value} defaultValue={option.value}>
              {option.text}
            </option>
          )
        })}
      </select>
      <SelectStyles onMouseLeave={closeOptions}>
        <SelectSelectedValStyles onClick={toggleOptions}>{selected.text}</SelectSelectedValStyles>
        {showOptions && (
          <SelectOptionsStyles>
            {props.options.map((option: TSelectOption) => {
              return (
                <SelectOptionStyles
                  onClick={selectOption}
                  key={option.value}
                  data-value={option.value}
                  isSelected={option.value === selected.value ? true : false}
                >
                  {option.text}
                </SelectOptionStyles>
              )
            })}
          </SelectOptionsStyles>
        )}
      </SelectStyles>
    </>
  ) : (
    <>Нет элементов для выбора</>
  )
}
