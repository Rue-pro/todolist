import React, { useRef } from 'react'
import { PopupStyles } from './styles'
import { useOnClickOutside } from '../hooks'
import { Dispatch, SetStateAction } from 'react'

export interface IPopupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  setShowPopup: Dispatch<SetStateAction<boolean>>
}

export const Popup = (props: IPopupProps): React.ReactElement => {
  const { children, setShowPopup } = props
  const popupRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(popupRef, () => {
    setShowPopup(false)
  })

  return <PopupStyles ref={popupRef}>{children}</PopupStyles>
}
