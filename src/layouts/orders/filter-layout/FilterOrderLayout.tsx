import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoadingState from "@/components/states/LoadingState";
import OrderFilter from "@/components/orders/OrderFilter";

const FilterOrderLayout = () => {
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
