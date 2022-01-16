import './App.css'
import React, { useState } from 'react'

const App = () => {
  const [ msg, setMsg ] = useState('')

  const handleClick = async () => {
    const data = await fetch('/api/hello') // uses proxy to send to server port (5000)
    const json = await data.json()
    console.log('json=>', json)
    const msg = json.message
    setMsg(msg)
  }


  return (
    <div className='App'>
      <div className='App-header'>
        <button onClick={handleClick}>CLICK ME</button>
        <p>{msg}</p>      
      </div>
    </div>
  )
}

export default App
