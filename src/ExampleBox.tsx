import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ExampleBox() {
  const ref = useRef<any>(null!);
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  );
}
