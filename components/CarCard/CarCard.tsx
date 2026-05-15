
import type { Car } from "@/types/car";

interface CarCardProps{
    car: Car;
}

export default function CarCard({ car }:CarCardProps) {
  return (
    <div>
      <h3>{car.brand}</h3>
      <p>{car.model}</p>
    </div>
  );
}