import { useEffect, useState } from "react";
import OrderCard from "@/components/orders/card/OrderCard";
import OrderCardSkeleton from "@/components/skeletons/OrderCardSkeleton";
import { getUpcomingOrdersService } from "@/services/orders/getUpcomingOrders";
import { Order } from "@/types/models.types";

const UpcomingOrdersView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const getUpcomingOrders = async () => {
      try {
        const orders = await getUpcomingOrdersService();
        setOrders(orders);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getUpcomingOrders();
  }, []);

  // Show skeleton while loading (2 cards)
  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3">
          {Array.from({ length: 2 }).map((_, index) => (
            <OrderCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {orders.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3">
          {orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No orders found.</p>
      )}
    </div>
  );
};

export default UpcomingOrdersView;
