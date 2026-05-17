import SelectBrand from "../SelectBrand/SelectBrand";
import { BrandsProps } from "@/types/filters";
import SelectPrice from "../SelectPrice/SelectPrice";
import MileageRange from "../MileageRange/MileageRange";

interface FiltersSearchProps{
    brands: string[],
    priceRange: {
        min: number,
        max:number,
    }
    filters: {
        brand: string,
        price: number,
        fromMileage: number,
        toMileage:number,
    },
    setFilters: React.Dispatch<
        React.SetStateAction<{
            brand: string;
            price: number;
            fromMileage: number;
            toMileage: number;
        }>
    >;
    onSearch: () => void;
}

export default function FiltersSearch({brands,priceRange,filters,setFilters,onSearch}:FiltersSearchProps) {
    return (
        <div>   
            <SelectBrand brands={brands} value={filters.brand}
                onChange={(brand) =>
                    setFilters(prev => ({
                        ...prev,
                        brand,
                    }))
                }>
            </SelectBrand>
            <SelectPrice min={priceRange.min} max={priceRange.max} value={filters.price}
                onChange={(price) =>
                    setFilters(prev => ({
                        ...prev,
                        price,
                    }))
    }></SelectPrice>
            <MileageRange fromMileage={filters.fromMileage} toMileage={filters.toMileage}
                onFromChange={(value) =>
                    setFilters(prev => ({
                        ...prev,
                        fromMileage: value,
                    }))
                }
                onToChange={(value) =>
                    setFilters(prev => ({
                        ...prev,
                        toMileage: value,
                    }))
                }
            />
            <button onClick={onSearch}>Search</button>
        </div>
       
    )
}