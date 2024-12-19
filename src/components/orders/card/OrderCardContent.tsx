import { Box, MapPin } from "lucide-react";
import { Destination } from "@/types/models.types";

interface OrderCardContentProps {
  destinations: Destination[];
}

/**
 * Shows the content of the order card.
 * Contains the pickup and dropoff destinations.
 * @param {OrderCardContentProps} props - Order Card Content Props
 * @property {Destination[]} props.destinations - Destinations
 * @returns {JSX.Element} Order Card Content Component
 */
const OrderCardContent = ({
  destinations,
}: OrderCardContentProps): JSX.Element => {
  return (
    <div className="relative flex flex-col gap-4 px-6 py-8">
      {destinations.map(({ address, end_date, nickname, start_date }) => {
        // Get the city from the address
        const addressParts = address.split(",");
        const city = addressParts[addressParts.length - 1].trim();

        return (
          <div key={start_date} className="flex items-center justify-between">
            <div className="flex flex-1 items-center gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                {nickname === "Recolección" ? (
                  <Box size={24} />
                ) : (
                  <MapPin size={24} />
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-neutral-500">
                  {nickname === "Recolección" ? "PICKUP" : "DROPOFF"}
                </span>
                <span className="text-base font-semibold text-neutral-100">
                  {city ?? "N/A"}
                </span>
                <span className="w-40 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-neutral-400 sm:w-64 md:text-sm xl:w-96">
                  {address}
                </span>
              </div>
            </div>

            {/* Date & Time */}
            <div className="flex flex-col text-right">
              <span className="text-xs text-neutral-400">
                {new Date(start_date).toLocaleDateString()}
              </span>
              <span className="text-sm font-semibold text-neutral-100">
                {new Date(end_date).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        );
      })}

      <div className="absolute left-[35px] top-20 h-10 w-0.5 bg-gradient-to-b from-white via-neutral-600 to-neutral-950" />
    </div>
  );
};

export default OrderCardContent;
