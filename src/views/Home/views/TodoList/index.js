import React from 'react'

// Components

// Styles
import getStyle from './style'

// PropTypes
export const propTypes = {}

function TodoList(props) {
  const style = getStyle(props)

  return <div css={style.todoList()}>TodoList</div>
}

export default TodoList
