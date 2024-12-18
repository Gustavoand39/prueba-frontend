import { Eye } from "lucide-react";

const OrderCardFooter = () => {
  return (
    <footer className="flex items-center justify-between gap-4">
      <button className="custom-btn custom-btn-left">
        It's time for pickup
      </button>

      <button className="custom-btn custom-btn-right flex items-center justify-center gap-2">
        Resume
        <Eye size={24} />
      </button>
    </footer>
  );
};

export default OrderCardFooter;
