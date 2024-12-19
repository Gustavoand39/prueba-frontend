import { Suspense } from "react";
import LoadingState from "@/components/states/LoadingState";
import GeneralHeaderLayout from "@/layouts/orders/general-layout/GeneralHeaderLayout";
import { Outlet } from "react-router-dom";

const GeneralOrderLayout = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <GeneralHeaderLayout />

      <main className="flex-1">
        <Suspense fallback={<LoadingState />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default GeneralOrderLayout;
