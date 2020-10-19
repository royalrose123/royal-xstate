import React from 'react'

// Components

// Styles
import getStyle from './style'

// PropTypes
export const propTypes = {}

function Calculator(props) {
  const style = getStyle(props)

  return <div css={style.calculator()}>Calculator</div>
}

export default Calculator
