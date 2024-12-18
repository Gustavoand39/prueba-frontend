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
    <div className="flex flex-col gap-4 rounded-3xl border-2 p-6">
      <OrderTimeline status={orderStatus} driverName={driver.nickname} />
    </div>
  );
};

export default OrderStatusCard;
