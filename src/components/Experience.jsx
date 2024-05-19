import { Cylinder, OrbitControls } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { RecycleDepot } from "./RecycleDepot";
import { CharacterController } from "./CharacterController";

export const Experience = () => {
  return (
    <>
      <OrbitControls rotate={false} />
      {/* LIGHTS */}
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        color={""}
      />

      {/* BACKGROUND */}
      <RigidBody colliders="cuboid" type="fixed">
        <RecycleDepot
          scale={0.1}
          position={[0, 0, 0]}
          rotation-y={1.5 * Math.PI}
        />
      </RigidBody>

      {/* CHARACTER */}
      <CharacterController />

      {/* STAGE */}
      <RigidBody type="fixed" position-y={-0.5} friction={2}>
        <CylinderCollider args={[1 / 2, 100]} />
        <Cylinder scale={[100, 1, 100]} receiveShadow>
          <meshStandardMaterial color="white" />
        </Cylinder>
      </RigidBody>
    </>
  );
};
