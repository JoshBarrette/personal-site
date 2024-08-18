import { Canvas } from "@react-three/fiber";
import ExampleBox from "./ExampleBox";

export default function MainScene() {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.8} />
        <ExampleBox />
      </Canvas>
    </div>
  );
}
