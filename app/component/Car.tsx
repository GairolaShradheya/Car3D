"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { useState } from "react";
import { memo } from "react";
import Loading from "./loading";

const cars = ["free_1975_porsche_911_930_turbo.glb", "free_bmw_m3_e30.glb", "porsche_gt3_rs.glb", "jiotto_caspita_f1_road_car_1989_by_alex.ka..glb", "nissan_skyline_gtr_r35.glb", "bmw_m4_f82.glb"];
function CarModel({ num, rotate, width, height, id }: { num: number, rotate?: boolean, width?: string, height?: string, id?: string }) {

  const [connection, setconnection] = useState(true)
  function Model({ car }: { car: string }) {
    const gltf = useGLTF(`${process.env.NEXT_PUBLIC_SUPABASE_URL + car}`);  //"https://buezrsamxmomerbwqmwy.supabase.co/storage/v1/object/public/cars/free_1975_porsche_911_930_turbo.glb" 
    setconnection(gltf ? true : false);
    return <primitive object={gltf.scene} scale={[2.8, 2.8, 2.8]} position={[0, -2, 0]} />;
  }

  useGLTF.preload(`${process.env.NEXT_PUBLIC_SUPABASE_URL}${cars[num]}`);

  return (
    <div id={id} style={{ width, height }}>
      {(connection) ? (<Canvas style={{ width, height }} camera={{ position: [0, 0, 10] }}>
        <directionalLight position={[-1, 10, 4]} intensity={5} />
        <ambientLight intensity={7} />
        <Model car={cars[num]} />
        <OrbitControls autoRotate={rotate} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} />
      </Canvas>) : (<Loading />)}
    </div>
  )
}
const Car = memo(CarModel);
export default Car;

