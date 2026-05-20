import type { Car } from "@/types/car.ts";
import CarCard from "../CarCard/CarCard";
import css from "./CarList.module.css";

interface CarListProps{
    cars: Car[];
}

export default function CarList({cars}:CarListProps) {
    return (
    <ul className={css.carList}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </ul>
  );
}