import styled, { setLabel } from 'utils/styled'

export default (props) => ({
  main() {
    return setLabel(styled.rem`
      display: flex;
      flex-direction: row;
      width: calc(100% - 120px);
      height: 100%;
    `)
  },
})
