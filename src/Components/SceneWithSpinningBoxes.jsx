import React, { useEffect, useRef, useState } from 'react'
import {
  Engine,
  Scene,
  useBeforeRender,
  useClick,
  useHover,
  useScene,
} from 'react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core'
import * as BABYLON from 'babylonjs';
import '@babylonjs/loaders';
const DefaultScale = new Vector3(1, 1, 1)
const BiggerScale = new Vector3(1.25, 1.25, 1.25)
const SpinningBox = (props) => {

  const [modelLoaded, setModelLoaded] = useState(false);
  const scene = useScene(); 

  useEffect(() => {
    
    BABYLON.SceneLoader.ImportMesh(
      "",
      "/src/assets/shoe.babylon",
      "",
      scene,
      (meshes) => {
      
        meshes.forEach(mesh => {
          mesh.position = new Vector3(-20, -20, -20);
        });
        meshes[0].position = new BABYLON.Vector3(0, 0, 0); 
        
        setModelLoaded(true);
      }
    );
  }, [scene]);

  
  const boxRef = useRef(null)
  const [clicked, setClicked] = useState(false)
  useClick(() => setClicked((clicked) => !clicked), boxRef)
  const [hovered, setHovered] = useState(false)
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    boxRef
  )
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
const SceneWithSpinningBoxes = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine
      antialias
      adaptToDeviceRatio
      canvasId="babylon-js"
      renderOptions={{
        whenVisibleOnly: true,
      }}
    >
      <Scene>
        <arcRotateCamera
          name="camera1"
          target={Vector3.Zero()}
          alpha={Math.PI / 2}
          beta={Math.PI / 4}
          radius={8}
          lowerRadiusLimit={6}
          upperRadiusLimit={10}
        />
        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Up()}
        />
        <SpinningBox
          name="left"
          position={new Vector3(0, 0, 0)}
          color={Color3.FromHexString('#EEB5EB')}
          hoveredColor={Color3.FromHexString('#C26DBC')}
        />
      </Scene>
    </Engine>
  </div>
)
export default SceneWithSpinningBoxes