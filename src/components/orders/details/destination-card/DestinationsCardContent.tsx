import { DestinationDetailed } from "@/types/models.types";
import { Box, MapPin } from "lucide-react";

interface DestintationCardContentProps {
  destinations: DestinationDetailed[];
}

const DestinationCardContent = ({
  destinations,
}: DestintationCardContentProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      {destinations.map((destination, index) => {
        const isPickup = index === 0; // First destination is pickup
        const city = destination.address.split(",").pop()?.trim() || "N/A";

        return (
          <div
            key={destination.address}
            className="flex flex-1 items-center gap-4"
          >
            {/* Icon */}
            <div>{isPickup ? <Box size={24} /> : <MapPin size={24} />}</div>

            {/* Details */}
            <div className="flex w-60 flex-col sm:w-full">
              <span className="text-xs font-semibold text-neutral-500">
                {isPickup ? "PICKUP" : "DROPOFF"}
              </span>
              <span className="text-base font-semibold">{city}</span>
              <span className="w-full truncate text-xs text-neutral-400">
                {destination.address}
              </span>
              <span className="text-xs text-neutral-400">
                {destination.status_string}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DestinationCardContent;
