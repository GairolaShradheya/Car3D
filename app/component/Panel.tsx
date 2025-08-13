"use client"
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

const cars = [
  { name: "Porsche 911", link: "/car-a", img: "/free_1975_porsche_911_930_turbo.glb" },
  { name: "the BMW M3", link: "/car-b", img: "https://th.bing.com/th/id/OIP.khB7mYDhxl-GBTasq8jdgQHaEo?w=279&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { name: "Globe Car", link: "/car-c", img: "/globe.svg" },
];

const Panel = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      style={{
        marginTop: "0px",
        padding: "0px",
        background: "#f5f5f5",
        borderRadius: "8px",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <h3>More Cars</h3>
      <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        {cars.map((car) => (
          <a
            key={car.name}
            href={car.link}
            style={{
              color: "#007bff",
              textDecoration: "none",
              padding: "8px 16px",
              background: "#fff",
              borderRadius: "4px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              height: "40vh",
              width: "40vw",
               
            }}
          >
            {}
            {car.img.endsWith(".svg", ".glb") ? (
              <img src={car.img} alt={car.name} width={32} height={32} />
            ) : null}
            {car.name}
          </a>
        ))}
      </div>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {}
      </Canvas>
    </div>
  );
};

export default Panel;