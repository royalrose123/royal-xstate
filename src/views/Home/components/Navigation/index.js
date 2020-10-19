import React from 'react'
// import PropTypes from 'prop-types'

// Components
import NavItem from './components/NavItem'

// Style
import getStyle from './style'

// Variables / Functions

export const propTypes = {}

function Navigation(props) {
  const style = getStyle(props)

  return (
    <div css={style.navigation()}>
      <NavItem name='Counter' path='counter' />
      <NavItem name='Calculator' path='calculator' />
    </div>
  )
}

Navigation.propTypes = propTypes

export default Navigation
