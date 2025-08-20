"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

const cars = ["1.png", "2.png", "3.png", "4.png", "5.png"];

const Panel = ({id}:{id:string}) => {
    const [index, setindex] = useState(0);
    useEffect(() => {
    const interval = setInterval(() => {
        setindex(prev => (prev >= cars.length - 3 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
}, []);
    
    return (
        <div id={id} className="w-[100%] h-[30vh] my-[5vh] mb-[10vh] flex justify-around items-center ">
            <Link href={`${process.env.NEXT_PUBLIC_URL}Cars/${index+1}`} className="w-[25vw]">
                <img src={cars[index]}></img>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_URL}Cars/${index+2}`} className="w-[25vw]">
                <img src={cars[index+1]}></img>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_URL}Cars/${index+3}`} className="w-[25vw]">
                <img src={cars[index+2]}></img>
            </Link>
        </div>
    );
};
export default Panel;