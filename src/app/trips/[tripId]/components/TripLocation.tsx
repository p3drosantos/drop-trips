import Button from "@/components/Button";
import Image from "next/image";

interface TripLocationProps {
  location: string;
  locationDescription?: string;
}

const TripLocation = ({ location, locationDescription }: TripLocationProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker mb-5">Localização</h2>
      <div className="relative w-full h-[280px]">
        <Image
          src="/map-mobile.png"
          alt={location}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg shadow-md"
        />
      </div>
      <h3 className="text-sm font-semibold text-primaryDark mt-3">
        {location}
      </h3>
      <p className="text-xs text-primaryDark leading-5 mt-2">
        {locationDescription}
      </p>
      <Button className="mt-5 w-full" variant="outlined">
        Ver no Google Maps
      </Button>
    </div>
  );
};

export default TripLocation;
