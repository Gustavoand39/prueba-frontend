import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  DestinationStatus,
  DestinationStatusColor,
} from "@/constants/DestinationStatus";
import { DestinationDetailed } from "@/types/models.types";

interface DestinationDetailsProps {
  isOpen: boolean;
  openChange: () => void;
  destination: DestinationDetailed;
  isPickup: boolean;
}

/**
 * Shows the details of a destination.
 * @param {DestinationDetailsProps} props - Destination Details Props
 * @property {boolean} props.isOpen - Is Open
 * @property {() => void} props.openChange - Open Change
 * @property {DestinationDetailed} props.destination - Destination
 * @property {boolean} props.isPickup - Is Pickup
 * @returns {JSX.Element} Destination Details Component
 */
const DestinationDetails = ({
  isOpen,
  openChange,
  destination,
  isPickup,
}: DestinationDetailsProps): JSX.Element => {
  const { address, contact_info, status_string } = destination;

  return (
    <Drawer open={isOpen} onOpenChange={openChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold text-neutral-100">
            {isPickup ? "Pickup" : "Dropoff"} Destination Details
          </DrawerTitle>
          <DrawerDescription className="text-sm text-neutral-400">
            {address}
          </DrawerDescription>
        </DrawerHeader>

        <div className="space-y-4 p-6 pt-2">
          <DetailContainer
            title="Contact Information"
            className="flex flex-col gap-3"
          >
            <InfoItem title="Name" data={contact_info.name} />
            <InfoItem title="Phone" data={contact_info.telephone} />
            <InfoItem title="Email" data={contact_info.email} />
            <InfoItem title="RFC" data={contact_info.rfc} />
          </DetailContainer>

          <DetailContainer title="Destination Status">
            <div className="flex items-center gap-2">
              <div
                className={`size-3 rounded-full ${DestinationStatusColor[status_string]}`}
              />
              <span>{DestinationStatus[status_string]}</span>
            </div>
          </DetailContainer>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

/**
 * Detail Container
 * @param {object} props - Props
 * @property {string} props.title - Title
 * @property {React.ReactNode} props.children - Children
 * @property {string} props.className - Class Name
 * @returns {JSX.Element} Detail Container Component
 */
const DetailContainer = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <div className={`rounded-lg bg-neutral-900 p-4 shadow-sm ${className}`}>
      <h3 className="mb-3 text-lg font-semibold text-neutral-100">{title}</h3>

      <div className="space-y-4">{children}</div>
    </div>
  );
};

/**
 * Info Item
 * @param {object} props - Props
 * @property {string} props.title - Title
 * @property {string} props.data - Data
 * @returns {JSX.Element} Info Item Component
 */
const InfoItem = ({
  title,
  data,
}: {
  title: string;
  data: string;
}): JSX.Element => {
  return (
    <div>
      <span className="block text-xs uppercase text-neutral-400">{title}</span>
      <span className="text-sm font-medium text-neutral-200">{data}</span>
    </div>
  );
};

export default DestinationDetails;
