import { FaRegCircleCheck } from "react-icons/fa6";

interface TripHighlightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker">Destaques</h2>

      <div className="flex flex-wrap gap-y-2 mt-2">
        {highlights.map((highlight, index) => (
          <div key={highlight} className="flex items-center gap-1 w-1/2">
            <FaRegCircleCheck size={15} color="#590BD8" />
            <p className="text-xs text-grayPrimary">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripHighlights;
