import type { Car } from "@/types/car.ts";
import CarCard from "../CarCard/CarCard";

interface CarListProps{
    cars: Car[];
}

export default function CarList({cars}:CarListProps) {
    return (
    <div>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}