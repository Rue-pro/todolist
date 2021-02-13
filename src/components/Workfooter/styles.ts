import styled from 'styled-components'
import { colors } from '../../common/constants'

export const WorkfooterStyles = styled.section`
  display: none;
  /* display: flex; */
  position: fixed;
  width: 100%;
  padding: 30px 20px;
  background-color: ${colors.gray};
  bottom: 0;
  justify-content: space-around;

  a {
    color: white;
  }
`
