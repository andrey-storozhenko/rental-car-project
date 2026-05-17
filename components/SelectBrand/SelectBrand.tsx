import Select from 'react-select'
import { createSelectOptions } from "@/utils/createSelectOptions";


interface SelectBrandProps {
    brands: string[];
    value: string;
    onChange: (value: string) => void;
}

export default function SelectBrand({brands,value,onChange}:SelectBrandProps) {
    const brandOptions = createSelectOptions(brands);
    return (
        <Select options={brandOptions}
            value={brandOptions.find(option => option.value === value)}
            onChange={(selectedOption) =>
                onChange(selectedOption?.value || "")
            }
        />
    )
}