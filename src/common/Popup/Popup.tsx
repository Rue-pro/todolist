import React, { useEffect, useRef } from 'react'
import { PopupStyles } from './styles'
import { useOnClickOutside } from '../hooks'

export const Popup = (props: any) => {
  const { children, setShowPopup } = props
  const popupRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(popupRef, () => {
    setShowPopup(false)
  })

  return <PopupStyles ref={popupRef}>{children}</PopupStyles>
}
