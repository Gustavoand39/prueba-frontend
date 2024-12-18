import { Truck } from "lucide-react";

interface OrderHeaderProps {
  type: string;
  statusString: string;
  statusClass: string;
}

/**
 * Order Status Color Class
 * @type {Record<string, string>}
 */
const statusColor: Record<string, string> = {
  "grey-dot-bg": "bg-neutral-400",
  "blue-dot-bg": "bg-blue-500",
};

/**
 * Order Status Text
 * @type {Record<string, string>}
 */
const statusText: Record<string, string> = {
  "Orden Asignada": "Order Assigned",
  "Recolección completada": "Pickup Completed",
};

/**
 * Order Header Component
 * @param {OrderHeaderProps} props - Order Header Props
 * @property {string} props.type - Order Type
 * @property {string} props.statusString - Order Status String
 * @property {string} props.statusClass - Class for Order Status color
 * @returns {JSX.Element} Order Header Component
 */
const OrderHeader = ({
  type,
  statusString,
  statusClass,
}: OrderHeaderProps): JSX.Element => {
  return (
    <header className="flex items-center justify-between gap-2 p-6">
      <div className="flex items-center gap-2.5">
        <Truck size={24} />
        <h3 className="font-bold">{type}</h3>
      </div>

      <div className="flex items-center gap-2.5">
        <div className={`size-3 rounded-full ${statusColor[statusClass]}`} />
        <span className="text-sm">{statusText[statusString]}</span>
      </div>
    </header>
  );
};

export default OrderHeader;
