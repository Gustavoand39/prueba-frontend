import { Package, FileText } from "lucide-react";

/**
 * Shows the footer of the order card.
 * Contains the pickup and details buttons.
 * @returns {JSX.Element} Order Card Footer Component
 */
const OrderCardFooter = (): JSX.Element => {
  /**
   * Handles the click event of the pickup button.
   * Only logs a message for now.
   * @returns {void}
   */
  const handlePickupClick = (): void => {
    console.log("Navegar");
  };

  /**
   * Handles the click event of the details button.
   * Navigates to the details page.
   * @returns {void}
   */
  const handleDetailsClick = (): void => {
    console.log("Detalles");
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

      <button
        className="custom-btn custom-btn-right"
        onClick={handleDetailsClick}
      >
        Details
        <FileText size={24} />
      </button>
    </footer>
  );
};

export default OrderCardFooter;
