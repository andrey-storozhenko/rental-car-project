"use client";
import { useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCars, getFilters } from "@/services/carService";
import CarList from "@/components/CardList/CardList";
import { Car } from "@/types/car";
import FiltersSearch from "@/components/FiltersSearch/FiltersSearch";


export default function CatalogClient() {
        
        const [filters, setFilters] = useState({
            brand: "",
            price: 0,
            fromMileage: 0,
            toMileage:0
        })
        const [appliedFilters, setAppliedFilters] = useState(filters);
        
        const handleSearch = () => {
            setAppliedFilters(filters);
        }
    
        const {
        data:carsData,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey:["cars", appliedFilters],
        queryFn: ({ pageParam = 1 }) => getCars({page:pageParam, ...appliedFilters}),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) {
            return lastPage.page + 1;
        }

        return undefined;
        },
    })

    const{
        data:filtersData,
        isError,
    } = useQuery({
        queryKey: ["car-filters"],
        queryFn:getFilters,
    })
    const allCars: Car[] = carsData?.pages.flatMap(page => page.cars) ?? [];
    
    const cars = allCars.filter((car) => {
        const matchesFromMileage = appliedFilters.fromMileage === 0 || car.mileage >= appliedFilters.fromMileage;

        const matchesToMileage = appliedFilters.toMileage === 0 || car.mileage <= appliedFilters.toMileage;

        return matchesFromMileage && matchesToMileage;
    });

    return (
        <div>
            <FiltersSearch brands={filtersData?.brands ?? []} filters={filters} priceRange={filtersData?.price ?? {min:0,max:0}} setFilters={setFilters} onSearch={handleSearch}></FiltersSearch>
            <CarList cars={cars}></CarList>

            {hasNextPage && (
                <button onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? "Loading..." : "Load more"}
                </button>
            )}
        </div>
    );
}