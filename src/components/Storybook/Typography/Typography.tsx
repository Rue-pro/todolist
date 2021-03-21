import React from 'react'
import { TypographyStyled } from './styles'
import Text from '../../../common/Text/Text'
import Title, { TitleTypeEnum } from '../../../common/Title/Title'

const Typography = (): React.ReactElement => {
  return (
    <TypographyStyled>
      <Text>Text</Text>
      <Title type={TitleTypeEnum.h1}>H1</Title>
      <Title type={TitleTypeEnum.h2}>H2</Title>
      <Title type={TitleTypeEnum.h3}>H3</Title>
      <Title type={TitleTypeEnum.h4}>H4</Title>
      <Title type={TitleTypeEnum.h5}>H5</Title>
    </TypographyStyled>
  )
}

export default Typography
