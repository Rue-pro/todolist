import React, { useState } from 'react'
import { SelectStyles, SelectSelectedValStyles, SelectOptionsStyles, SelectOptionStyles } from './styles'

export type TSelectOption = {
  value: string
  text: string
}

export interface ISelectProps extends React.HTMLAttributes<HTMLDivElement> {
  options: Array<TSelectOption>
}

export const Select = ({ options }: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState({
    value: options[0].value,
    text: options[0].text
  })
  const [showOptions, setShowOptions] = useState(false)

  const toggleOptions = () => {
    showOptions ? setShowOptions(false) : setShowOptions(true)
  }
  const closeOptions = () => {
    setShowOptions(false)
  }
  const selectOption = (e: React.MouseEvent<HTMLSpanElement>): void => {
    const selected = e.currentTarget.dataset.value || options[0].text
    setSelected({
      value: selected,
      text: e.currentTarget.innerHTML
    })
    setShowOptions(false)
  }

  return options ? (
    <>
      <select className="myselect1" style={{ display: 'none' }} value={selected.value}>
        {options.map((option: TSelectOption) => {
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
            {options.map((option: TSelectOption) => {
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
