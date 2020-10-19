import React from 'react'

// Components

// Styles
import getStyle from './style'

// PropTypes
export const propTypes = {}

function Counter(props) {
  const style = getStyle(props)

  return <div css={style.counter()}>Counter</div>
}

export default Counter
