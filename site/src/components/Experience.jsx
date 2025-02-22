import { Environment, Float, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Book } from "./Book";

export function Experience() {
  const { gl } = useThree();
  
  // Lower quality for faster initial load
  gl.setPixelRatio(1);

  return (
    <>
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={0.5}
        speed={1.5}
        rotationIntensity={1.5}
      >
        <Book />
      </Float>
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        maxDistance={20}
        minDistance={2}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        zoomSpeed={0.5}
        rotateSpeed={0.5}
      />
      <Environment preset="studio" />
      <directionalLight
        position={[2, 5, 2]}
        intensity={2}
        castShadow
        shadow-mapSize={[256, 256]} // Further reduced for initial load
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
}
