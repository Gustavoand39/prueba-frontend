import { useState } from "react";
import { Box, MapPin } from "lucide-react";
import DestinationDetails from "@/components/orders/details/destination-card/DestinationDetails";
import {
  DestinationStatus,
  DestinationStatusColor,
} from "@/constants/DestinationStatus";
import { DestinationDetailed } from "@/types/models.types";

interface DestintationCardContentProps {
  destinations: DestinationDetailed[];
}

/**
 * Shows the content of the destination card.
 * @param {DestintationCardContentProps} props
 * @returns {JSX.Element}
 */
const DestinationCardContent = ({
  destinations,
}: DestintationCardContentProps): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] =
    useState<DestinationDetailed | null>(null);
  const [isPickup, setIsPickup] = useState(false);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleDestinationSelect = (
    destination: DestinationDetailed,
    isPickup: boolean,
  ) => {
    setSelectedDestination(destination);
    setIsPickup(isPickup);
    setIsDrawerOpen(true);
  };

  return (
    <>
      <div className="relative flex flex-col gap-6">
        {destinations.map((destination, index) => {
          const isPickup = index === 0;
          const city = destination.address.split(",").pop()?.trim() || "N/A";

          return (
            <div
              key={destination.address}
              className="flex flex-1 cursor-pointer items-center gap-4"
              role="button"
              tabIndex={0}
              onClick={() => handleDestinationSelect(destination, isPickup)}
            >
              {/* Icon */}
              <div>{isPickup ? <Box size={24} /> : <MapPin size={24} />}</div>

              {/* Details */}
              <div className="flex w-60 flex-col space-y-0.5 p-1 sm:w-full">
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
        <div className="absolute left-[12px] top-[65px] h-[65px] w-0.5 bg-gradient-to-b from-white via-neutral-600 to-neutral-950" />
      </div>

      {selectedDestination && (
        <DestinationDetails
          isOpen={isDrawerOpen}
          openChange={handleDrawerClose}
          destination={selectedDestination}
          isPickup={isPickup}
        />
      )}
    </>
  );
};

export default DestinationCardContent;
