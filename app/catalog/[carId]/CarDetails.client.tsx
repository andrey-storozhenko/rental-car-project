"use client";
import BookForm from "@/components/BookForm/BookForm"
import CarDetails from "@/components/CardDetails/CardDetails"
import { Car } from "@/types/car"

interface CarDetailsClientProps{
    car: Car,
    carId:string,
}

export default function CarDetailsClient({car,carId}:CarDetailsClientProps) {
    
    return (
        <div>
            <CarDetails car={car} />
            <BookForm carId={carId} />
        </div>
    )
}