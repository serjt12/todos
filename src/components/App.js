import React from 'react'
import Main from './Main'

function App() {
  return (
    <div className="layout">
      <Main />
      <style scoped>{`
        .layout {
          display: flex;
          text-align: center;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}

export default App