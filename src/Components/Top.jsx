import React from 'react'
import SceneComponent from './SceneComponent'
import OnSceneReady from './onSceneReady'
import SceneWithSpinningBoxes from './SceneWithSpinningBoxes'
import MyScene from './onSceneReady'
import NewScene from './NewScene'

const Top = () => {
  return (
    <div className='h-4/6 w-full bg-gray-400'>
        {/* <OnSceneReady  /> */}
        {/* <MyScene /> */}
        {/* <SceneWithSpinningBoxes /> */}
        <NewScene />
    </div>
  )
}

export default Top