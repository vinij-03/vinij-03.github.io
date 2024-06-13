// src/assets/Globe.jsx
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, GizmoHelper } from '@react-three/drei';

const Model = ({ path }) => {
    const { scene } = useGLTF(path);
    scene.scale.set(0.5, 0.5, 0.5);
    scene.position.set(0,-2.5,0);
    scene.rotation.set(0,0,0);
    useFrame(() => {
        scene.rotation.y +=0.003; // Adjust the speed of rotation as needed
    });
    return <primitive object={scene} />;
};

const Globe = ({ path, style }) => {
    const controlsRef = useRef();
    useEffect(() => {

    }, []);

    return (
        <div style={{ ...style, position: 'relative', width: '100%', height: '100%' }}>
            <Canvas style={{ width: '100%', height: '100%' }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 0, 5]} intensity={1} />
                <directionalLight position={[0, 0, -5]} intensity={1} />
                <Suspense fallback={null}>
                    <Model path={path} />
                </Suspense>
                <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI/2} maxPolarAngle={0} />
            </Canvas>
        </div>
    );
};

export default Globe;