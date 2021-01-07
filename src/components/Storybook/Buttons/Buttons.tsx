import React from 'react'
import { ButtonsStyled } from './styles'
import { Button } from '../../../common/Button/Button'

export const Buttons = () => {
  return (
    <ButtonsStyled>
      Primary button
      <Button primary>Regular</Button>
      <Button primary className="hover">
        Hover
      </Button>
      <Button primary className="focus">
        Focus
      </Button>
      <Button primary className="active">
        Active
      </Button>
      <Button primary disabled>
        Disabled
      </Button>
    </ButtonsStyled>
  )
}
