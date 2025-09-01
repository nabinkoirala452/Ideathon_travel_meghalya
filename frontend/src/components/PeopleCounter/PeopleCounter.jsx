// src/components/PeopleCounter/PeopleCounter.jsx
import React, { useRef, useEffect, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';

const PeopleCounter = () => {
  const videoRef = useRef(null);
  const [peopleCount, setPeopleCount] = useState(0);

  useEffect(() => {
    const runDetection = async () => {
      const model = await cocoSsd.load();
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
          videoRef.current.play();

          setInterval(async () => {
            const predictions = await model.detect(videoRef.current);
            const people = predictions.filter(p => p.class === 'person').length;
            setPeopleCount(people);
          }, 1000);
        } catch (err) {
          console.error("Error accessing the webcam:", err);
        }
      }
    };
    runDetection();
  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%', maxWidth: '600px', display: 'none' }} />
      <h2>People in View: {peopleCount}</h2>
    </div>
  );
};

export default PeopleCounter;