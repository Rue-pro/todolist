import React, { useEffect } from 'react'
import { PopupStyles, PopupBgStyles } from './styles'
import { Dispatch, SetStateAction } from 'react'

export type setShowPopupType = Dispatch<SetStateAction<boolean>>

export interface IPopupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  closeModal(): void
}

const Popup = (props: IPopupProps): JSX.Element => {
  const { children, closeModal } = props

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  })

  return (
    <>
      <PopupBgStyles onClick={closeModal}></PopupBgStyles>
      <PopupStyles>{children}</PopupStyles>
    </>
  )
}

export default Popup
