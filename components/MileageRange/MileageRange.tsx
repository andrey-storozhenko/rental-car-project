

interface MileageRangeProps {
    fromMileage: number;
    toMileage: number;

    onFromChange: (value: number) => void;
    onToChange: (value: number) => void;
}

export default function MileageRange({fromMileage,toMileage,onFromChange,onToChange}:MileageRangeProps) {
    return (
        <div>
            <input type="number" value={fromMileage || ""} onChange={e => onFromChange(Number(e.target.value))} placeholder="From" />
            <input type="number" value={toMileage || ""} onChange={e => onToChange(Number(e.target.value))} placeholder="To"/>
        </div>
    )
}