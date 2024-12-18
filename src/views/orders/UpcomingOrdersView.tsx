import OrderCard from "@/components/orders/card/OrderCard";
import OrderCardSkeleton from "@/components/skeletons/OrderCardSkeleton";
import { useOrderStore } from "@/stores/OrderStore";

const UpcomingOrdersView = () => {
  const isLoading = useOrderStore((state) => state.isLoading);
  const orders = useOrderStore((state) => state.orders);

  // Show skeleton while loading (2 cards)
  if (isLoading) {
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3">
          {Array.from({ length: 2 }).map((_, index) => (
            <OrderCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto pb-12">
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
