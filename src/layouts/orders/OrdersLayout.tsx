import { Suspense } from "react";
import LoadingState from "@/components/states/LoadingState";
import OrdersHeader from "@/layouts/orders/header/OrdersHeader";

interface OrdersLayoutProps {
  children: React.ReactNode;
}

const OrdersLayout = ({ children }: OrdersLayoutProps) => {
  return (
    <div className="flex h-screen w-full flex-col">
      <OrdersHeader />

      <main className="flex-1">
        <Suspense fallback={<LoadingState fullScreen />}>{children}</Suspense>
      </main>
    </div>
  );
};

export default OrdersLayout;
