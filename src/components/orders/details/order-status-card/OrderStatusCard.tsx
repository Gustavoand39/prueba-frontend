import OrderStatusFooterCard from "./OrderStatusFooterCard";
import OrderTimeline from "./OrderTimeline";

interface OrderStatusCardProps {
  orderStatus: 0 | 1 | 2 | 3;
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
