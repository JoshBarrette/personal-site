import { Canvas } from "@react-three/fiber";
import ExampleBox from "./ExampleBox";
import RoomScene from "./RoomScene";

export default function MainScene() {
  return (
    <div>
      <Canvas
        camera={{
          position: [5, 5, 5],
          fov: 90,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.8} />
        <ExampleBox />
        {/* <RoomScene /> */}
      </Canvas>
    </div>
  );
}
