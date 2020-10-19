import styled, { setLabel } from 'utils/styled'

export default (props) => ({
  todoList() {
    return setLabel(styled.rem`
      width: 100%;
      height: 100%;
    `)
  },
})
