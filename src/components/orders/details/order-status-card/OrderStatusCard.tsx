import OrderStatusFooterCard from "./OrderStatusFooterCard";
import OrderTimeline from "./OrderTimeline";
import { OrderStatus } from "@/types/models.types";

interface OrderStatusCardProps {
  orderStatus: OrderStatus;
  driver: {
    nickname: string;
    thumbnail?: string;
  };
}

const OrderStatusCard = ({ orderStatus, driver }: OrderStatusCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border-2">
      <OrderTimeline status={orderStatus} driverName={driver.nickname} />

      <OrderStatusFooterCard isActive={orderStatus >= 3} />
    </div>
  );
};

export default OrderStatusCard;
