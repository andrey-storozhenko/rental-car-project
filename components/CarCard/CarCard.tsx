
import type { Car } from "@/types/car";
import { useRouter } from 'next/navigation';

interface CarCardProps{
  car: Car;
  
}

export default function CarCard({ car }: CarCardProps) {
  const router = useRouter();

  const handleDetailsButton = () => {
    router.push(`/catalog/${car.id}`)
  }
  return (
    <div>
      <div>
        <h2>{car.id}</h2>
        <p>{car.brand} {car.model} {car.year}</p>
        <p>${car.rentalPrice}</p>
      </div>
      <div>
        <p>{car.location.city}</p>
        <p>{car.location.country}</p>
        <p>{car.rentalCompany}</p>
      </div>
      <div>
        <p>{car.type}</p>
        <p>{car.mileage} km</p>
      </div>
      <button onClick={handleDetailsButton}>Read more</button>
    </div>
  );
}