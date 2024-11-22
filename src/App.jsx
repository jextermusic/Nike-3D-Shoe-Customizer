import React, { useState } from 'react'
import Bottom from './Components/Bottom'
import Top from './Components/Top'
import OnSceneReady from './Components/onSceneReady'



const App = () => {
  const [colorData, setcolorData] = useState("5,5,5")
  console.log(colorData)
  return (
    <>
    <div className='h-screen w-screen flex flex-col'>
    {/* <div className='h-4/6 w-full bg-gray-400'>
      <OnSceneReady data="something" />
    </div> */}
    <Top/>
    <Bottom setcolorData={setcolorData} />
    </div>
    </>
  )
}

export default App