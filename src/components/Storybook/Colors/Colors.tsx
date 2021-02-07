import React from 'react'
import { colors } from '../../../common/constants'
import { ColorsStyled, ColorsHeaderStyled, ColorsRowStyled, ColorsColorStyled } from './styles'

export const Colors = (): React.ReactElement => {
  return (
    <ColorsStyled>
      <ColorsHeaderStyled>
        <div>Название</div>
        <div>Цвет</div>
        <div>HEX/rgba</div>
      </ColorsHeaderStyled>
      {Object.entries(colors).map(([key, color]) => {
        return (
          <ColorsRowStyled key={'color_' + color + '_key_' + key}>
            <div>{key}</div>
            <div>
              <ColorsColorStyled color={color} />
            </div>
            <div>{color}</div>
          </ColorsRowStyled>
        )
      })}
    </ColorsStyled>
  )
}
