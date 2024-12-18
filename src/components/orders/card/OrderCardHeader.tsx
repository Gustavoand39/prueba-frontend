import { Truck } from "lucide-react";

interface OrderHeaderProps {
  type: string;
  status_string: string;
}

const OrderHeader = ({ type, status_string }: OrderHeaderProps) => {
  return (
    <header className="flex items-center justify-between gap-2 px-6 py-4">
      <div className="flex items-center gap-2">
        <Truck size={24} />
        <h3 className="font-bold">{type}</h3>
      </div>

      <div>
        <span className="text-sm">{status_string}</span>
      </div>
    </header>
  );
};

export default OrderHeader;
