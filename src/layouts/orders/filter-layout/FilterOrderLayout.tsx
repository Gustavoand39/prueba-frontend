import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";

import LoadingState from "@/components/states/LoadingState";
import OrderFilter from "@/components/orders/OrderFilter";
import { getUpcomingOrdersService } from "@/services/orders/getUpcomingOrders";
import { useOrderStore } from "@/stores/OrderStore";

const FilterOrderLayout = () => {
  const setIsLoading = useOrderStore((state) => state.setIsLoading);
  const setOrders = useOrderStore((state) => state.setOrders);

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
  }, [setIsLoading, setOrders]);

  return (
    <div className="flex h-full flex-col">
      <OrderFilter />

      <div className="flex-1">
        <Suspense fallback={<LoadingState />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default FilterOrderLayout;
