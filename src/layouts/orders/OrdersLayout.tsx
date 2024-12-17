import { Suspense } from "react";
import LoadingState from "@/components/states/LoadingState";

interface OrdersLayoutProps {
  children: React.ReactNode;
}

const OrdersLayout = ({ children }: OrdersLayoutProps) => {
  return (
    <div className="flex h-screen flex-col">
      <header className="shadow-sm">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-semibold">Header</h1>
        </div>
      </header>

      <main className="flex-1">
        <Suspense fallback={<LoadingState fullScreen />}>{children}</Suspense>
      </main>
    </div>
  );
};

export default OrdersLayout;
