import React from 'react'
import { Global } from '@emotion/core'
import globalStyle from 'styles/reboot'

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <div className='App'>
        <div>app</div>
      </div>
    </>
  )
}

export default App
