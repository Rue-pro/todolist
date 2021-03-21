import React from 'react'
import { ButtonsStyled } from './styles'
import Button, { ButtonTypeEnum } from '../../../common/Button/Button'

const Buttons = (): React.ReactElement => {
  return (
    <ButtonsStyled>
      Primary button
      <Button type={ButtonTypeEnum.primary}>Regular</Button>
      <Button type={ButtonTypeEnum.primary} className="hover">
        Hover
      </Button>
      <Button type={ButtonTypeEnum.primary} className="focus">
        Focus
      </Button>
      <Button type={ButtonTypeEnum.primary} className="active">
        Active
      </Button>
      <Button type={ButtonTypeEnum.primary} disabled>
        Disabled
      </Button>
    </ButtonsStyled>
  )
}

export default Buttons
