"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getCars } from "@/services/carService";
import CarList from "@/components/CardList/CardList";
import { Car } from "@/types/car";

export default function CatalogClient() {
    const {
        data,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey:["cars"],
        queryFn: ({ pageParam = 1 }) => getCars(pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) {
            return lastPage.page + 1;
        }

        return undefined;
        },
    })

    const cars:Car[] = data?.pages.flatMap(page => page.cars) ?? [];

    return (
        <div>
            <CarList cars={cars}></CarList>

            {hasNextPage && (
                <button onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? "Loading..." : "Load more"}
                </button>
            )}
        </div>
    );
}