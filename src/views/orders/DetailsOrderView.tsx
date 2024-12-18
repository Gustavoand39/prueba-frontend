import { useEffect, useState } from "react";
import LoadingState from "@/components/states/LoadingState";
import DestinationCard from "@/components/orders/details/destination-card/DestinationCard";
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

  return (
    <div className="h-full">
      <div className="mx-auto max-w-3xl p-6">
        <DestinationCard
          orderNumber={order.order_number}
          referenceNumber={order.reference_number}
          destinations={order.destinations}
        />
      </div>
    </div>
  );
};

export default DetailsOrderView;
