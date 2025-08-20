"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Car from "./Car";
import Panel from "./panel";
gsap.registerPlugin(ScrollTrigger);
import { carDetails } from "./carDetails";
import Footer from "./footer";

export default function Main() {

    const animate = (id: string, trig: string, from: object, to: object, delay?: number,scrub?: boolean, start?: string, end?:string) => {
        gsap.fromTo(
            id,
            from,
            {
                ...to,
                delay,
                scrollTrigger: {
                    trigger: trig,
                    start: start || "top 80%",
                    end: end || "top top",
                    toggleActions: "play none none reverse",
                    scrub: scrub || false,
                },
            }
        );
    }

    useEffect(() => {
        animate("#hero-title", "#hero-section", { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.8);
        animate("#hero-subtitle", "#hero-section", { y: 100, opacity: 0, duration: 1, ease: "power3.out" }, { y: 0, opacity: 1 },0.4);
        animate("#car", "#details-section", { x:0, y: 0 }, { x:"26vw", y: "30vh" }, 0,true, "top 20%","bottom bottom");
        animate("#detail", "#car", { x: -500, opacity: 0 }, { x: -100, opacity: 1 }, 0,true, "top 50%","bottom 50%");
        animate(".q1", "#quote", { x: -500, opacity: 0 }, { x: -50, opacity: 1 }, 0,true, "top bottom");
        animate("#panel", "#panel", { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0,true,"top 90%");
    }, []);

    return (
        <>
            <section className="mt-[25vh] flex flex-col items-center min-h-[90vh] py-[5vh]">
                <div id="hero-section" className="border-b-2 border-gray-800 w-[80vw] h-[50%] pb-[10vh]">
                    <h1 id="hero-title" className="relative z-1 text-4xl font-bold bg-gradient-to-br from-red-400 to-cyan-300 bg-clip-text text-transparent text-center mb-2">Welcome to Car3D</h1>
                    <p id="hero-subtitle" className="relative z-0 text-center text-lg mb-6">Explore our collection of 3D car models.</p>
                </div>
                <div id="datails-section" className="flex items-center justify-center relative">
                    <div id="detail" className="absolute top-[49vh] left-0 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-center mb-4">{carDetails[0].name}</h2>
                        <p className="text-center text-lg mb-2">{carDetails [0].engine} engine</p>
                        <p className="text-center text-lg mb-2">with {carDetails[0].hp} horsepower</p>
                        <p className="text-center text-lg mb-2">Top Speed is {carDetails[0].topSpeed}</p>
                    </div>
                    <Car id="car" num={0} height="50vh" width="38vw" rotate={true} />
                </div>
                <div id="quote" className="mt-[50vh] mb-[15vh] w-full flex flex-col items-center justify-center">
                    <h2 className="q1 text-4xl font-bold">Let the wind be your ride and the Earth your guide</h2>
                    <h2 className="q1 text-3xl font-bold">Let us explore more cars.</h2>
                </div> us
                <Panel id="panel"/>
            </section>
            <Footer/>
        </>
    )
}
