import Select from 'react-select'
import { createSelectOptions } from "@/utils/createSelectOptions";


interface SelectPriceProps {
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
}


export default function SelectPrice({min,max,value,onChange}:SelectPriceProps) {
    const prices = [];
    for (let i = 0; i <= max; i += 10){
        prices.push(i);
    }
    const priceOptions = createSelectOptions(prices);
    return (
        <Select options={priceOptions}
            value={priceOptions.find(option => option.value === value)}
            onChange={(selectedOption) =>
                onChange(Number(selectedOption?.value || 0))
            }
            placeholder="Select price"
        />
    )
}