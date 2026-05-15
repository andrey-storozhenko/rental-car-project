
import type { Car } from '@/types/car';
import { api } from "../lib/api/api";

interface FetchCarsResponse{
    cars: Car[];
    totalCars: number,
    page: number,
    totalPages:number,
}

export const getCars = async (page:number = 1):Promise<FetchCarsResponse> => {
    const response = await api.get<FetchCarsResponse>(`/cars?page=${page}`);
    return response.data;
};