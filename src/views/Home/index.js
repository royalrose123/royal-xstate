import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'
import PropTypes from 'prop-types'

// Components
// import Navigation from './components/Navigation'
import Main from './components/Main'

// Styles
import getStyle from './style'
import Navigation from './components/Navigation'

// PropTypes
export const propTypes = {
  match: PropTypes.object,
}

const Counter = loadable(() => import('./views/Counter'))
const Calculator = loadable(() => import('./views/Calculator'))

function Home(props) {
  const style = getStyle(props)

  const { match } = props

  console.log('Home match', match)

  return (
    <div css={style.home()}>
      <Navigation />
      <Main>
        <Switch>
          <Route strict sensitive path='/home/counter' component={Counter} />
          <Route strict sensitive path='/home/calculator' component={Calculator} />
          <Redirect replace from='/' to='/home/counter' />
        </Switch>
      </Main>
    </div>
  )
}

Home.propTypes = propTypes

export default Home
