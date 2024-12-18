import DestinationCardHeader from "./DestinationCardHeader";
import DestinationsCardContent from "./DestinationsCardContent";
import { DestinationDetailed } from "@/types/models.types";

interface DestinationCardProps {
  referenceNumber: string;
  orderNumber: string;
  destinations: DestinationDetailed[];
}

const DestinationCard = ({
  referenceNumber,
  orderNumber,
  destinations,
}: DestinationCardProps) => {
  return (
    <section className="flex flex-col gap-6 rounded-3xl border-2 p-6">
      <DestinationCardHeader
        orderNumber={orderNumber}
        referenceNumber={referenceNumber}
      />

      <DestinationsCardContent destinations={destinations} />
    </section>
  );
};

export default DestinationCard;
