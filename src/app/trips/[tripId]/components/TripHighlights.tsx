import { FaRegCircleCheck } from "react-icons/fa6";

interface TripHighlightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col p-5 lg:p-0 lg:mt-12">
      <h2 className="font-semibold text-primaryDarker mb-2 lg:text-xl">
        Destaques
      </h2>

      <div className="flex flex-wrap gap-y-2 mt-2 lg:mt-5">
        {highlights.map((highlight, index) => (
          <div
            key={highlight}
            className="flex items-center gap-1 lg:gap-3 w-1/2"
          >
            <FaRegCircleCheck size={15} color="#590BD8" />
            <p className="text-xs lg:text-base text-grayPrimary">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripHighlights;
