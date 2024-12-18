import { DestinationDetailed } from "@/types/models.types";
import { Box, MapPin } from "lucide-react";

interface DestintationCardContentProps {
  destinations: DestinationDetailed[];
}

/**
 * Mapping of destination status to color
 * @type {Record<string, string>}
 */
const DestinationStatusColor: Record<string, string> = {
  Aceptado: "bg-blue-300",
  "En espera": "bg-neutral-300",
};

/**
 * Mapping of destination status from Spanish to English
 * @type {Record<string, string>}
 */
const DestinationStatus: Record<string, string> = {
  Aceptado: "Accepted",
  "En espera": "On Hold",
};

/**
 * Shows the content of the destination card.
 * @param {DestintationCardContentProps} props
 * @returns {JSX.Element}
 */
const DestinationCardContent = ({
  destinations,
}: DestintationCardContentProps): JSX.Element => {
  return (
    <div className="relative flex flex-col gap-6">
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
            <div className="flex w-60 flex-col space-y-0.5 sm:w-full">
              <span className="text-xs font-semibold text-neutral-500">
                {isPickup ? "PICKUP" : "DROPOFF"}
              </span>
              <span className="text-base font-semibold">{city}</span>
              <span className="w-full truncate text-xs text-neutral-400">
                {destination.address}
              </span>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <div
                  className={`size-3 rounded-full ${DestinationStatusColor[destination.status_string]}`}
                />
                <span>{DestinationStatus[destination.status_string]}</span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Line to separate destinations */}
      <div className="absolute left-[12px] top-[60px] h-[65px] w-0.5 bg-gradient-to-b from-white to-neutral-950" />
    </div>
  );
};

export default DestinationCardContent;
