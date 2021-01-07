import React from 'react'
import { colors } from '../../../common/constants'
import { ColorsStyled, ColorsHeaderStyled, ColorsRowStyled, ColorsColorStyled } from './styles'

export const Colors = () => {
  console.log(colors)
  return (
    <ColorsStyled>
      <ColorsHeaderStyled>
        <div>Название</div>
        <div>Цвет</div>
        <div>HEX</div>
      </ColorsHeaderStyled>
      {Object.entries(colors).map(([key, color], i) => {
        return (
          <ColorsRowStyled key={'color_' + color}>
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
