import { useEffect, useState } from "react";
import LoadingState from "@/components/states/LoadingState";
import DestinationCard from "@/components/orders/details/destination-card/DestinationCard";
import OrderStatusCard from "@/components/orders/details/order-status-card/OrderStatusCard";
import { getOrdersService } from "@/services/orders/getOrders";
import { Orders } from "@/types/models.types";

const DetailsOrderView = () => {
  const [order, setOrder] = useState<Orders | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const order = await getOrdersService();
        setOrder(order);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  if (!order) {
    return <LoadingState />;
  }

  console.log(order);

  return (
    <div className="h-full px-6 py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        {/* Card with destinations */}
        <DestinationCard
          orderNumber={order.order_number}
          referenceNumber={order.reference_number}
          destinations={order.destinations}
        />

        {/* Card with order status */}
        <OrderStatusCard
          orderStatus={order.status}
          endDate={order.end_date}
          driver={{
            nickname: order.driver.nickname,
            thumbnail: order.driver.thumbnail,
          }}
        />
      </div>
    </div>
  );
};

export default DetailsOrderView;
