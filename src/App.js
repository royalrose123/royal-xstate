import React from 'react'
import { Global } from '@emotion/core'
import { Route, Switch, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'

// Styles
import globalStyle from 'styles/reboot'

// PropTypes
export const propTypes = {}

const Home = loadable(() => import('./views/Home'))

function App(props) {
  return (
    <>
      <Global styles={globalStyle} />
      <Switch>
        <Route strict sensitive path='/home' component={Home} />
        <Redirect from='/' to='/home' />
      </Switch>
    </>
  )
}

export default App
