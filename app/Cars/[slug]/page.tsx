import React from 'react'
import Car from '@/app/component/Car';
import { carDetails } from '@/app/component/carDetails';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Cars({ params }: PageProps) {
  const { slug } = await params;
  const carIndex = parseInt(slug);
  // const car = carDetails[carIndex];

  return (
    <div id="datails-section" className="flex items-center justify-center">
      <div id="detail" className="flex flex-col items-center w-[50vw] justify-center">
        <h2 className="text-3xl font-bold text-center mb-4">{(carDetails[carIndex]).name}</h2>
        <p className="text-center text-lg mb-2">{(carDetails[carIndex]).engine} engine</p>
        <p className="text-center text-lg mb-2">with {(carDetails[carIndex]).hp} horsepower</p>
        <p className="text-center text-lg mb-2">Top Speed is {(carDetails[carIndex]).topSpeed}</p>
      </div>
      <Car id="car" num={carIndex} height="50vh" width="50vw" rotate={true} />
    </div>
  );
}



