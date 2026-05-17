import { getCarById } from "@/services/carService";
import CarDetailsClient from "./CarDetails.client";

type CarDetailProps = {
    params: Promise<{ carId: string }>;
}
 const CarDetails = async ({params}:CarDetailProps) => {
    const { carId } = await params;
     
    const car = await getCarById(carId);
    console.log(car);
     return (
         <CarDetailsClient car={car} carId={carId} />
    );
}

export default CarDetails;