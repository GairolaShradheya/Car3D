import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { memo } from "react";
import { useRef, useState } from "react";
import {Mesh} from "three";
import Loading from "./loading";

const cars = ["free_1975_porsche_911_930_turbo.glb", "free_bmw_m3_e30.glb", "porsche_gt3_rs.glb", "jiotto_caspita_f1_road_car_1989_by_alex.ka..glb", "nissan_skyline_gtr_r35.glb", "bmw_m4_f82.glb"];

function CarModel({ num, rotate, width, height, id, scrollY }: { num: number, rotate?: boolean, width?: string, height?: string, id?: string, scrollY:number }) {
  const [loading, setloading] = useState(true)
  const carRef=useRef<Mesh>(null!)

  // useFrame(()=>{
  //   if(carRef.current){
  //     carRef.current.position.x= scrollY / 300
  //     carRef.current.position.y= scrollY / 1000
  //   }
  // })
  // const gltf = useGLTF("free_1975_porsche_911_930_turbo.glb");
  // setloading(false);
  function Model({ car }: { car: string }) {
    const gltf = useGLTF("free_1975_porsche_911_930_turbo.glb");  //Supabase :- `${process.env.NEXT_PUBLIC_SUPABASE_URL + car}`
    setloading(false);
    return <primitive ref={carRef} object={gltf.scene} scale={[2, 2, 2]} position={[0, -2, 0]} />;
  }

  useGLTF.preload(`${process.env.NEXT_PUBLIC_SUPABASE_URL}${cars[0]}`);
  return (
    <Canvas id={id} style={{ width, height }} camera={{ position: [0, 0, 10] }}>
      <directionalLight position={[-1, 10, 4]} intensity={5} />
      <ambientLight intensity={7} />
      {/* <primitive ref={carRef} object={gltf.scene} scale={[2, 2, 2]} position={[0, -2, 0]} /> */}
      <Model car={cars[num]} />
      <OrbitControls autoRotate={rotate} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} />
    </Canvas>)
}
let Car = memo(CarModel);
export default Car;

type CarDetails = {
  id: number;
  filename: string;
  name: string;
  year: number;
  type: string;
  engine: string;
  hp: number;
  topSpeed: string;
  origin: string;
}

export const carDetails: CarDetails[] = [
  {
    id: 0,
    filename: "free_1975_porsche_911_930_turbo.glb",
    name: "Porsche 911 Turbo (1975)",
    year: 1975,
    type: "Sports Car",
    engine: "3.0L Flat-6 Turbo",
    hp: 260,
    topSpeed: "155 mph",
    origin: "Germany",
  },
  {
    id: 1,
    filename: "free_bmw_m3_e30.glb",
    name: "BMW M3 E30",
    year: 1986,
    type: "Sports Sedan",
    engine: "2.3L I4",
    hp: 192,
    topSpeed: "146 mph",
    origin: "Germany",
  },
  {
    id: 2,
    filename: "porsche_gt3_rs.glb",
    name: "Porsche GT3 RS",
    year: 2022,
    type: "Track-focused Sports Car",
    engine: "4.0L Flat-6 NA",
    hp: 518,
    topSpeed: "184 mph",
    origin: "Germany",
  },
  {
    id: 3,
    filename: "jiotto_caspita_f1_road_car_1989_by_alex.ka..glb",
    name: "Jiotto Caspita (1989)",
    year: 1989,
    type: "Prototype Supercar",
    engine: "F1 3.5L V10",
    hp: 450,
    topSpeed: "199 mph",
    origin: "Japan",
  },
  {
    id: 4,
    filename: "nissan_skyline_gtr_r35.glb",
    name: "Nissan GT-R R35",
    year: 2009,
    type: "High-Performance Coupe",
    engine: "3.8L V6 Twin Turbo",
    hp: 565,
    topSpeed: "196 mph",
    origin: "Japan",
  },
  {
    id: 5,
    filename: "bmw_m4_f82.glb",
    name: "BMW M4 F82",
    year: 2014,
    type: "Performance Coupe",
    engine: "3.0L I6 Twin Turbo",
    hp: 425,
    topSpeed: "155 mph",
    origin: "Germany",
  },
];