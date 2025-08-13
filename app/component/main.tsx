"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Car from "./Car";
gsap.registerPlugin(ScrollTrigger);


export default function Main() {
    const [scrollY, setscrollY] = useState(0)
    useEffect(() => {
      const handlescroll = ()=>{
        setscrollY(window.scrollY)
      }
      window.addEventListener("scroll",handlescroll);
      return ()=> window.removeEventListener("scroll",handlescroll);
    }, [])
    

    let animate = (id: string, trig: string, from: object, to: object, delay?: number, start?: string) => {
        gsap.fromTo(
            id,
            from,
            {
                ...to,
                delay,
                scrollTrigger: {
                    trigger: trig,
                    start: start || "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }

    useEffect(() => {
        animate("#hero-title", "#hero-section", { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.8);
        animate("#hero-subtitle", "#hero-section", { y: 100, opacity: 0, duration: 1, ease: "power3.out" }, { y: 0, opacity: 1 },0.4);
        animate("#car", "#hero-section", { y: 100, opacity: 0, duration: 1, ease: "power3.out" }, { y: 0, opacity: 1 }, 1, "top 50%");
    }, []);

    return (
        <>
            <section className="mt-[25vh] flex flex-col items-center min-h-[90vh] py-[5vh]">
                <div id="hero-section" className="border-b-2 border-gray-800 w-[80vw] h-[50%] pb-[10vh]">
                    <h1 id="hero-title" className="relative z-1 text-4xl font-bold bg-gradient-to-br from-red-400 to-cyan-300 bg-clip-text text-transparent text-center mb-2">Welcome to Car3D</h1>
                    <p id="hero-subtitle" className="relative z-0 text-center text-lg mb-8">Explore our collection of 3D car models.</p>
                </div>
                <div>
                    <Car id="car" num={0} height="60vh" width="60vw" rotate={true} scrollY={scrollY}/>
                </div>
            </section>
        </>
    )
}