import React, { useEffect } from 'react';
import {
  Engine,
  Scene,
  useScene,
} from 'react-babylonjs';
import '@babylonjs/loaders';
import { Vector3, Color3, SceneLoader, Color4 } from '@babylonjs/core';
import { useOverlayColor } from '../Context/overlayColorContext';

const NewScene = () => {
  const { 
    trigger_1, trigger_2, trigger_3, trigger_4, trigger_5, 
    trigger_6, trigger_7, trigger_8, trigger_9, 
    FabricToeGuard, Vamp, Tongue, Liner, Swoosh, 
    Midsole, AirBubble, Laces, Heal 
  } = useOverlayColor();

  const ShoeModel = () => {
    const scene = useScene();

    useEffect(() => {
      if (!scene) return;

      SceneLoader.ImportMesh("", "/assets/", "jordanscompressed.glb", scene, (meshes) => {
        console.log("Meshes loaded:", meshes);

        // Helper to apply color to specific meshes
        const applyColor = (indices, color, trigger) => {
          indices.forEach((index) => {
            const mesh = meshes[index];
            if (mesh) {
              mesh.material = mesh.material || new BABYLON.StandardMaterial("material", scene);
              mesh.material.diffuseColor = new Color3(color.r / 255, color.g / 255, color.b / 255);
              mesh.renderOverlay = trigger; // Ensure overlay renders if needed
            }
          });
        };

        // Apply colors to respective parts
        applyColor([15, 16], FabricToeGuard, trigger_1);
        applyColor([17, 18], Vamp, trigger_2);
        applyColor([40, 39], Tongue, trigger_3);
        applyColor([37, 38], Laces, trigger_4);
        applyColor([14, 13], AirBubble, trigger_5);
        applyColor([31, 32], Swoosh, trigger_8);
        applyColor([10, 9], Liner, trigger_6);
        applyColor([46, 45], Midsole, trigger_7);
        applyColor([1, 2], Heal, trigger_9);

        scene.markAllMaterialsAsDirty(); // Ensure updates are reflected in the scene
      });
    }, [scene, FabricToeGuard, Vamp, Tongue, Laces, AirBubble, Swoosh, Liner, Midsole, Heal, trigger_1, trigger_2, trigger_3, trigger_4, trigger_5, trigger_6, trigger_7, trigger_8, trigger_9]);

    return null;
  };

  return (
    <div className="h-full w-full">
      <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene clearColor={new Color4(0.5, 0.5, 0.5, 0)}>
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
            name="light2"
            intensity={0.7}
            direction={Vector3.Up()}
          />
          <ShoeModel />
        </Scene>
      </Engine>
    </div>
  );
};

export default NewScene;
