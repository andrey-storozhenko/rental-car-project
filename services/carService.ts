
import type { Car } from '@/types/car';
import { api } from "../lib/api/api";

interface FetchCarsResponse{
    cars: Car[];
    totalCars: number,
    page: number,
    totalPages:number,
}

interface FetchFiltersResponse{
    brands: string[],
    price: {
        min: number,
        max:number,
    }
}

interface GetCarsParams{
    page?: number,
    brand?: string,
    price?: number,
};

interface CarFormValues{
    name: string,
    email: string,
    comment:string,
}

export const getCars = async ({ page = 1, brand, price}: GetCarsParams): Promise<FetchCarsResponse> => {
    const params = new URLSearchParams();
    params.append("page", String(page));

    if (brand) {
        params.append("brand", brand);
    }
     if (price) {
        params.append("price", String(price));
    }

    const response = await api.get<FetchCarsResponse>(`/cars?${params.toString()}`);
    return response.data;
};

export const getFilters = async () => {
    const response = await api.get<FetchFiltersResponse>("/cars/filters");
    return response.data;
}

export const getCarById = async (id: string) => {
    const response = await api.get<Car>(`/cars/${id}`);
    return response.data;
}

export const createBookCar = async (carId:string,data:CarFormValues) => {
    const response = await api.post(`/cars/${carId}/booking-requests`, data);

    return response.data;
}