import React from 'react'
import { useMyHook } from 'jhooks'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App