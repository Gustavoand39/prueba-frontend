import { Suspense } from "react";
import LoadingState from "@/components/states/LoadingState";
import OrdersHeader from "@/layouts/orders/header/OrdersHeader";
import { Outlet } from "react-router-dom";

const OrdersLayout = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <OrdersHeader />

      <main className="flex-1">
        <Suspense fallback={<LoadingState />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default OrdersLayout;
