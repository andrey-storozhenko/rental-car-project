import { Car } from "@/types/car"

interface CarDetailsProps{
    car:Car
}

export default function CarDetails({car}:CarDetailsProps) {
    
    return (
        <div>
            <div>
                <h2>{car.brand} {car.model}, {car.year}</h2>
                <p>{car.location.city}, {car.location.country}</p>
                <h2>${car.rentalPrice}</h2>
                <p>{car.description}</p>
            </div>
            <div>
                <h3>Rental conditions:</h3>
                {car.rentalConditions.map((item, index) => (
                    <p key={index}>{item}</p>
                ) )}
            </div>
            <div>
                <h3>Car Specifications:</h3>
                <p>Year: {car.year}</p>
                <p>Type: {car.type}</p>
                <p>Fuel Consumption: {car.fuelConsumption}</p>
                <p>Engine: {car.engine}</p>
                <p>Mileage: {car.mileage}</p>
            </div>
            <div>
                <h3>Features</h3>
                {car.features.map((item, index) => (
                    <p key={index}>{item}</p>
                ) )}
            </div>
        </div>
    )
}