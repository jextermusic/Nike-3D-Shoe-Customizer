import React, { useEffect, useRef, useState } from 'react'
import {
  Engine,
  Scene,
  useBeforeRender,
  useClick,
  useHover,
  useScene,
} from 'react-babylonjs'
import '@babylonjs/loaders';

import { Vector3, Color3, SceneLoader, Color4 } from '@babylonjs/core'
import * as BABYLON from 'babylonjs';
import { Inspector } from '@babylonjs/inspector';
import { useOverlayColor } from '../Context/overlayColorContext';


const NewScene = () => {

    const DefaultScale = new Vector3(1, 1, 1)
    const BiggerScale = new Vector3(1.25, 1.25, 1.25)
    const { trigger_1 } = useOverlayColor();
    const { trigger_2 } = useOverlayColor();
    const { trigger_3 } = useOverlayColor();
    const { trigger_4 } = useOverlayColor();
    const { trigger_5 } = useOverlayColor();
    const { trigger_6 } = useOverlayColor();
    const { trigger_7 } = useOverlayColor();
    const { trigger_8 } = useOverlayColor();
    const { trigger_9 } = useOverlayColor();
    const { FabricToeGuard } = useOverlayColor(); 
    const { Vamp } = useOverlayColor(); 
    const { Tongue } = useOverlayColor(); 
    const { Liner } = useOverlayColor(); 
    const { Swoosh } = useOverlayColor(); 
    const { Midsole } = useOverlayColor(); 
    const { AirBubble } = useOverlayColor(); 
    const { Laces } = useOverlayColor(); 
    const { Heal } = useOverlayColor(); 

  

    
    const SpinningBox = (props) => {
      return (
        <box
          name={props.name}
          ref={boxRef}
          size={2}
          position={props.position}
          scaling={clicked ? BiggerScale : DefaultScale}
        >
          <standardMaterial
            name={`${props.name}-mat`}
            diffuseColor={hovered ? props.hoveredColor : props.color}
            specularColor={Color3.Black()}
          />
        </box>
      )
    }
    
    const ShoeModel = () => {
        const scene = useScene();
        
    
            SceneLoader.ImportMesh(
                "",
                "/src/assets/",
                "jordanscompressed.glb",
                scene,
                function(meshes) {

                    console.log(meshes)
                    meshes.forEach(mesh => {
                        // mesh.position = new Vector3(0, 0, 0);
                    });
                      
                    meshes[15].renderOverlay = trigger_1;
                    meshes[15].overlayColor = new BABYLON.Color3(FabricToeGuard.r /255, FabricToeGuard.g /255, FabricToeGuard.b /255)
                    meshes[16].renderOverlay = trigger_1;
                    meshes[16].overlayColor = new BABYLON.Color3(FabricToeGuard.r /255, FabricToeGuard.g /255, FabricToeGuard.b /255)

                    meshes[17].renderOverlay = trigger_2;
                    meshes[17].overlayColor = new BABYLON.Color3(Vamp.r /255, Vamp.g /255, Vamp.b /255)
                    meshes[18].renderOverlay = trigger_2;
                    meshes[18].overlayColor = new BABYLON.Color3(Vamp.r /255, Vamp.g /255, Vamp.b /255)

                    meshes[40].renderOverlay = trigger_3;
                    meshes[40].overlayColor = new BABYLON.Color3(Tongue.r /255, Tongue.g /255, Tongue.b /255)
                    meshes[39].renderOverlay = trigger_3;
                    meshes[39].overlayColor = new BABYLON.Color3(Tongue.r /255, Tongue.g /255, Tongue.b /255)

                    meshes[37].renderOverlay = trigger_4;
                    meshes[37].overlayColor = new BABYLON.Color3(Laces.r /255, Laces.g /255, Laces.b /255)
                    meshes[38].renderOverlay = trigger_4;
                    meshes[38].overlayColor = new BABYLON.Color3(Laces.r /255, Laces.g /255, Laces.b /255)

                    meshes[14].renderOverlay = trigger_5;
                    meshes[14].overlayColor = new BABYLON.Color3(AirBubble.r /255, AirBubble.g /255, AirBubble.b /255)
                    meshes[13].renderOverlay = trigger_5;
                    meshes[13].overlayColor = new BABYLON.Color3(AirBubble.r /255, AirBubble.g /255, AirBubble.b /255)

                    
                    meshes[31].renderOverlay = trigger_8;
                    meshes[31].overlayColor = new BABYLON.Color3(Swoosh.r /255, Swoosh.g /255, Swoosh.b /255)
                    meshes[32].renderOverlay = trigger_8;
                    meshes[32].overlayColor = new BABYLON.Color3(Swoosh.r /255, Swoosh.g /255, Swoosh.b /255)
                    
                    meshes[10].renderOverlay = trigger_6;
                    meshes[10].overlayColor = new BABYLON.Color3(Liner.r /255, Liner.g /255, Liner.b /255)
                    meshes[9].renderOverlay = trigger_6;
                    meshes[9].overlayColor = new BABYLON.Color3(Liner.r /255, Liner.g /255, Liner.b /255)

                    
                    meshes[46].renderOverlay = trigger_7;
                    meshes[46].overlayColor = new BABYLON.Color3(Midsole.r /255, Midsole.g /255, Midsole.b /255)
                    meshes[45].renderOverlay = trigger_7;
                    meshes[45].overlayColor = new BABYLON.Color3(Midsole.r /255, Midsole.g /255, Midsole.b /255)

                                        
                    meshes[1].renderOverlay = trigger_9;
                    meshes[1].overlayColor = new BABYLON.Color3(Heal.r /255, Heal.g /255, Heal.b /255)
                    meshes[2].renderOverlay = trigger_9;
                    meshes[2].overlayColor = new BABYLON.Color3(Heal.r /255, Heal.g /255, Heal.b /255)
                }
            );
    }

  return (
    <div
  className='h-full w-full'>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene
      clearColor={new Color4(0.5,0.5,0.5,0)} 
      >
        <arcRotateCamera
          name="camera1"
          target={Vector3.Zero()}
          alpha={Math.PI / 10}
          beta={Math.PI / 3}
          radius={10}
        />
        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Left()}
        />
        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Up()}
        />
        <ShoeModel />
      </Scene >
    </Engine>
  </div>
  )
}

export default NewScene