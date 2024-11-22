// src/components/ShoeModel.js
import React, { useEffect } from 'react';
import { useScene } from 'react-babylonjs';
import { SceneLoader } from '@babylonjs/core';

const ShoeModel = ({ overlayColors }) => {
  const scene = useScene();

  useEffect(() => {
    const loadMesh = async () => {
      try {
        const result = await SceneLoader.ImportMeshAsync("", "/src/assets/", "jordanscompressed.glb", scene);
        const meshes = result.meshes;

        if (!meshes.length) {
          console.error('No meshes were loaded');
          return;
        }

        const overlayMapping = [
          { meshes: [15, 16], trigger: overlayColors.trigger_1, color: overlayColors.trigger_1 },
          { meshes: [17, 18], trigger: overlayColors.trigger_2, color: overlayColors.trigger_2 },
          { meshes: [40, 39], trigger: overlayColors.trigger_3, color: overlayColors.trigger_3 },
          { meshes: [37, 38], trigger: overlayColors.trigger_4, color: overlayColors.trigger_4 },
          { meshes: [14, 13], trigger: overlayColors.trigger_5, color: overlayColors.trigger_5 },
          { meshes: [31, 32], trigger: overlayColors.trigger_8, color: overlayColors.trigger_8 },
          { meshes: [10, 9], trigger: overlayColors.trigger_6, color: overlayColors.trigger_6 },
          { meshes: [46, 45], trigger: overlayColors.trigger_7, color: overlayColors.trigger_7 },
          { meshes: [1, 2], trigger: overlayColors.trigger_9, color: overlayColors.trigger_9 },
        ];

        overlayMapping.forEach(mapping => {
          mapping.meshes.forEach(index => {
            if (meshes[index]) {
              meshes[index].renderOverlay = mapping.trigger;
              meshes[index].overlayColor = mapping.color;
            } else {
              console.warn(`Mesh index ${index} not found`);
            }
          });
        });
      } catch (error) {
        console.error('Error loading mesh:', error);
      }
    };

    loadMesh();
  }, [scene, overlayColors]);

  return null;
};

export default ShoeModel;
