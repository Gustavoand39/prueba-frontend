import OrderStatusFooterCard from "./OrderStatusFooterCard";
import OrderTimeline from "./OrderTimeline";
import { OrderStatus } from "@/types/models.types";
import avatarFallback from "@/assets/images/avatar.jpeg";

interface OrderStatusCardProps {
  orderStatus: OrderStatus;
  endDate: number;
  driver: {
    nickname: string;
    thumbnail?: string;
  };
}

/**
 * Shows the order status card.
 * Contains the order timeline and the driver avatar.
 * @param {OrderStatusCardProps} props - Order Status Card Props
 * @property {OrderStatus} props.orderStatus - Order Status
 * @property {number} props.endDate - Order End Date
 * @property {Driver} props.driver - Driver
 * @returns {JSX.Element} Order Status Card Component
 */
const OrderStatusCard = ({
  orderStatus,
  endDate,
  driver,
}: OrderStatusCardProps) => {
  return (
    <div className="relative">
      {/* Avatar */}
      <div className="absolute left-1/2 top-20 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-4">
        <img
          src={driver.thumbnail || avatarFallback}
          alt={driver.nickname}
          className="size-20 rounded-full border-4 border-white object-cover shadow-md md:size-24"
        />
        <p className="font-semibolds text-center text-sm md:text-lg">
          {new Date(endDate).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      {/* Card content */}
      <div className="mt-16 flex flex-col gap-4 rounded-3xl border-2 pt-20">
        <div className="flex items-center justify-center p-2">
          <OrderTimeline status={orderStatus} driverName={driver.nickname} />
        </div>
        <OrderStatusFooterCard isActive={orderStatus >= 3} />
      </div>
    </div>
  );
};

export default OrderStatusCard;
