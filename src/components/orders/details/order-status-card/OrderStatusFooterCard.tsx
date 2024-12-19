import clsx from "clsx";

interface OrderStatusFooterCardProps {
  isActive: boolean;
}

/**
 * Shows the footer of the order status card.
 * Contains the track order button.
 * @param {OrderStatusFooterCardProps} props - Order Status Footer Card Props
 * @property {boolean} props.isActive - Is Active
 * @returns {JSX.Element} Order Status Footer Card Component
 */
const OrderStatusFooterCard = ({
  isActive,
}: OrderStatusFooterCardProps): JSX.Element => {
  const handleTrackOrder = () => {
    console.log("Track Order");
  };

  return (
    <footer>
      <button
        disabled={!isActive}
        className={clsx("w-full rounded-b-3xl py-4 text-xl font-semibold", {
          "bg-custom-primary text-black hover:bg-custom-primary-light":
            isActive,
          "border-t-2 bg-transparent text-neutral-700": !isActive,
        })}
        onClick={handleTrackOrder}
      >
        Track Order
      </button>
    </footer>
  );
};

export default OrderStatusFooterCard;
