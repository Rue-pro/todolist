import React, { useEffect, useState } from 'react'
import { SelectStyles, SelectSelectedValStyles, SelectOptionsStyles, SelectOptionStyles } from './styles'

export type TSelectOption = {
  value: string
  text: string
}

export interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: Array<TSelectOption>
  onChangeSelect?(selected: TSelectOption): void
  currentValue: string
}

const Select = ({ options, onChangeSelect, currentValue, ...rest }: ISelectProps): JSX.Element => {
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

  useEffect(() => {
    if (currentValue) {
      const currentOption = options.filter((option) => option.value === currentValue)
      if (currentOption.length) setSelected(currentOption[0])
    }
  })

  useEffect(() => {
    if (onChangeSelect) {
      onChangeSelect(selected)
    }
  }, [selected])

  return options ? (
    <>
      <select className="myselect1" style={{ display: 'none' }} defaultValue={selected.value} {...rest}>
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

export default Select
