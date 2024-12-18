import { useEffect, useState } from "react";
import OrderCard from "@/components/orders/card/OrderCard";
import { getUpcomingOrdersService } from "@/services/orders/getUpcomingOrders";
import { Order } from "@/types/models.types";

const UpcomingOrdersView = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const getUpcomingOrders = async () => {
      const orders = await getUpcomingOrdersService();
      setOrders(orders);
    };

    getUpcomingOrders();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3">
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingOrdersView;
