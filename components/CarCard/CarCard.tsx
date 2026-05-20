
import type { Car } from "@/types/car";
import { useRouter } from 'next/navigation';
import css from "./CarCard.module.css"
interface CarCardProps{
  car: Car;
  
}

export default function CarCard({ car }: CarCardProps) {
  const router = useRouter();

  const handleDetailsButton = () => {
    router.push(`/catalog/${car.id}`)
  }
  return (
    <li className={css.carCard}>
      <img className={css.image} src={car.img} alt="car" />
      <div className={css.carInfo}>
        <p className={css.carInfoText}>{car.brand} <span className="blueMark">{car.model}</span>, {car.year}</p>
        <p className={css.carInfoPrice}>${car.rentalPrice}</p>
      </div>
      <div className={css.carLocation}>
        <p className={css.carLocationCity}>{car.location.city}</p>
        <p className={css.carLocationCountry}>{car.location.country}</p>
        <p className={css.carCompany}>{car.rentalCompany}</p>
      </div>
      <div className={css.carMileage}>
        <p className={css.carType}>{car.type}</p>
        <p className={css.carMileageInfo}>{car.mileage} km</p>
      </div>
      <button onClick={handleDetailsButton} className={css.buttonDetails}>Read more</button>
    </li>
  );
}