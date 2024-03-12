import { useState } from 'react'
import CardTotalRider from './CardTotalRider'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <CardTotalRider />
    </div>
    </>
  )
}

export default App
