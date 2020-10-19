import styled, { setLabel } from 'utils/styled'

export default (props) => ({
  calculator() {
    return setLabel(styled.rem`
      width: 100%;
      height: 100%;
    `)
  },
})