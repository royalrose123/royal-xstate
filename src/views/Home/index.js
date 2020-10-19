import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'
// import PropTypes from 'prop-types'

// Components
import Navigation from './components/Navigation'
import Main from './components/Main'

// Styles
import getStyle from './style'

// PropTypes
export const propTypes = {}

const Counter = loadable(() => import('./views/Counter'))
const Calculator = loadable(() => import('./views/Calculator'))
const TodoList = loadable(() => import('./views/TodoList'))

function Home(props) {
  const style = getStyle(props)

  return (
    <div css={style.home()}>
      <Navigation />
      <Main>
        <Switch>
          <Route strict sensitive path='/home/counter' component={Counter} />
          <Route strict sensitive path='/home/calculator' component={Calculator} />
          <Route strict sensitive path='/home/todolist' component={TodoList} />
          <Redirect replace from='/' to='/home/counter' />
        </Switch>
      </Main>
    </div>
  )
}

Home.propTypes = propTypes

export default Home
