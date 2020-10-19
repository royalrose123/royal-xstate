import React from 'react'

// Styles
import getStyle from './style'

// PropTypes
export const propTypes = {}

function Home(props) {
  const style = getStyle(props)

  return (
    <div css={style.home()}>
      Home
      <div css={style.aaa()}>aaa</div>
    </div>
  )
}

export default Home
