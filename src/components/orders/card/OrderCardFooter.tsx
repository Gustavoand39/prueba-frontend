import clsx from "clsx";
import { Package, FileText, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface OrderCardFooterProps {
  orderId: string;
  startDate: number;
}

/**
 * Shows the footer of the order card.
 * Contains the pickup and details buttons.
 * @param {OrderCardFooterProps} props - Order Card Footer Props
 * @property {string} props.orderId - Order ID
 * @returns {JSX.Element} Order Card Footer Component
 */
const OrderCardFooter = ({
  orderId,
  startDate,
}: OrderCardFooterProps): JSX.Element => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [timeDifference, setTimeDifference] = useState(0);

  // Calculating the time remaining
  const timeRemaining = 300000 - timeDifference;
  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  useEffect(() => {
    const startDateTime = new Date(startDate).getTime();
    const currentTime = Date.now();
    const timeToEnableButton = 300000;

    const initialTimeDifference = currentTime - startDateTime;

    if (initialTimeDifference >= timeToEnableButton) {
      setIsButtonEnabled(true);
    } else {
      setTimeDifference(initialTimeDifference);

      const intervalId = setInterval(() => {
        const currentTime = Date.now();
        const updatedTimeDifference = currentTime - startDateTime;

        setTimeDifference(updatedTimeDifference);

        if (updatedTimeDifference >= timeToEnableButton) {
          setIsButtonEnabled(true);
          clearInterval(intervalId);
          console.log("Navegar");
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [startDate]);

  return (
    <footer className="flex items-center justify-between gap-6">
      <button
        className={clsx("custom-btn custom-btn-left", {
          "custom-btn-active": isButtonEnabled,
          "custom-btn-disabled": !isButtonEnabled,
        })}
        disabled={!isButtonEnabled}
      >
        {isButtonEnabled ? <Package size={24} /> : <Clock size={24} />}
        {isButtonEnabled
          ? "Pickup"
          : `${hours > 0 ? `${hours}h ` : ""}${minutes}m ${seconds}s`}
      </button>

      <Link to={`/orders/${orderId}`}>
        <button className="custom-btn custom-btn-right custom-btn-active">
          Details
          <FileText size={24} />
        </button>
      </Link>
    </footer>
  );
};

export default OrderCardFooter;
