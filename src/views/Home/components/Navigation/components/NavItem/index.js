import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, NavLink, useRouteMatch } from 'react-router-dom'

// Style
import getStyle from './style'

// Variables / Functions

export const propTypes = {
  match: PropTypes.object,
  name: PropTypes.string,
  path: PropTypes.string,
}

function NavItem(props) {
  const style = getStyle(props)

  const { match, name, path } = props

  const useMatch = useRouteMatch({
    path: `/home/${path}`,
    strict: true,
    sensitive: true,
  })

  const hasMatch = Boolean(useMatch)

  return (
    <NavLink css={style.navItem(hasMatch)} replace to={`${match.url}/${path}`}>
      <p>{name}</p>
    </NavLink>
  )
}

NavItem.propTypes = propTypes

export default withRouter(NavItem)
