import styled, { setLabel } from 'utils/styled'

export default (props) => ({
  navigation() {
    return setLabel(styled.rem`
      display: flex;
      flex-direction: column;
      width: 120px;
      height: 100%;
      border-right: 1px solid black;
    `)
  },
})
