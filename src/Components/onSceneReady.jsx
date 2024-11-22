import React, { useRef, useEffect } from 'react';
import { ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader } from "@babylonjs/core";
import { useBeforeRender, useClick, useHover } from 'react-babylonjs';
import SceneComponent from "./SceneComponent";
import { useOverlayColor } from '../Context/overlayColorContext';
import "../App.css";

const onSceneReady = () => {
  const { overlayColor } = useOverlayColor();
  
  const onSceneReady = async (scene, overlayColor) => {
   
    const camera = new ArcRotateCamera("camera1", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 20, -30), scene);

   
    camera.setTarget(Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();

    
    camera.attachControl(canvas, true);

   
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  
    light.intensity = 0.7;

const shoe = await SceneLoader.ImportMeshAsync(null, "/src/assets/shoe.babylon", null, scene);
   
    shoe.meshes[11].renderOverlay = true;
    shoe.meshes[11].overlayColor = new BABYLON.Color3(overlayColor.r /255, overlayColor.g /255, overlayColor.b /255);

   

   
   
  };

  const onRender = (scene) => {
    
  };

  return (
    <div className="h-full w-full">
      <SceneComponent className="h-full w-full" antialias onSceneReady={(scene) => onSceneReady(scene, overlayColor)} onRender={onRender} id="my-canvas" />
    </div>
  );
};

export default onSceneReady;