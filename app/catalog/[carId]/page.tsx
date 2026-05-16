
type CarDetailProps = {
    params: Promise<{ carId: string }>;
}
 const CarDetails = async ({params}:CarDetailProps) => {
    const { carId } = await params;

    return <div>Car Details: {carId}</div>;
}

export default CarDetails;