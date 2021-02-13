import styled, { css } from 'styled-components'

const TitleStyles = css`
  color: #000000;
  font-weight: 500;
  text-align: left;
  line-height: normal;
  margin: 0;
`

export const TitleH1Styled = styled.h1`
  ${TitleStyles}
  font-size: 48px;
`

export const TitleH2Styled = styled.h2`
  ${TitleStyles}
  font-size: 32px;
`

export const TitleH3Styled = styled.h3`
  ${TitleStyles}
  font-size: 24px;
`

export const TitleH4Styled = styled.h4`
  ${TitleStyles}
  font-size: 18px;
`

export const TitleH5Styled = styled.h5`
  ${TitleStyles}
  font-size: 16px;
`
