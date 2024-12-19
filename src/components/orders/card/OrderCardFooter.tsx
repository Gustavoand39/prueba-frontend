import { Package, FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface OrderCardFooterProps {
  orderId: string;
}

/**
 * Shows the footer of the order card.
 * Contains the pickup and details buttons.
 * @param {OrderCardFooterProps} props - Order Card Footer Props
 * @property {string} props.orderId - Order ID
 * @returns {JSX.Element} Order Card Footer Component
 */
const OrderCardFooter = ({ orderId }: OrderCardFooterProps): JSX.Element => {
  /**
   * Handles the click event of the pickup button.
   * Only logs a message for now.
   * @returns {void}
   */
  const handlePickupClick = (): void => {
    console.log("Navegar");
  };

  return (
    <footer className="flex items-center justify-between gap-6">
      <button
        className="custom-btn custom-btn-left"
        onClick={handlePickupClick}
      >
        <Package size={24} />
        Pickup
      </button>

      <Link to={`/orders/${orderId}`}>
        <button className="custom-btn custom-btn-right">
          Details
          <FileText size={24} />
        </button>
      </Link>
    </footer>
  );
};

export default OrderCardFooter;
