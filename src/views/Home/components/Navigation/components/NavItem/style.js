import styled, { setLabel } from 'utils/styled'

export default (props) => ({
  navItem(hasMatch) {
    return setLabel(styled.rem`
      width: 100%;
      padding: 12px;
      color: #000000;
      background-color: ${hasMatch ? 'rgb(96, 201, 194)' : 'none'};

      :hover {
        background-color: rgba(0, 0, 0, 0.3);
      }
    `)
  },
})
