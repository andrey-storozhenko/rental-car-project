import { Car } from "@/types/car";

export const createSelectOptions = (items:(string | number)[]) => {
    return (items.map(value => ({
        value,
        label: String(value),
    })));
};