import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UpcomingOrdersView } from "@/views/orders";
import LoadingState from "@/components/states/LoadingState";
import OrdersLayout from "@/layouts/orders/OrdersLayout";

const AuthRoutes: React.FC = () => (
  <Suspense fallback={<LoadingState fullScreen />}>
    <OrdersLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />

        <Route path="/upcoming" element={<UpcomingOrdersView />} />

        <Route path="*" element={<Navigate to="/sign-in" />} />
      </Routes>
    </OrdersLayout>
  </Suspense>
);

export default AuthRoutes;
