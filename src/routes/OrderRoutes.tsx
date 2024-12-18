import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Lazy-loaded views
const UpcomingOrdersView = lazy(
  () => import("@/views/orders/UpcomingOrdersView"),
);
const DetailsOrderView = lazy(() => import("@/views/orders/DetailsOrderView"));

// Components
import LoadingState from "@/components/states/LoadingState";
import OrdersLayout from "@/layouts/orders/OrdersLayout";

const AuthRoutes: React.FC = () => (
  <Suspense fallback={<LoadingState fullScreen />}>
    <OrdersLayout>
      <Routes>
        {/* Redirect to /upcoming if route is the root */}
        <Route path="/" element={<Navigate to="/upcoming" />} />

        <Route path="/upcoming" element={<UpcomingOrdersView />} />
        <Route path="/:id" element={<DetailsOrderView />} />

        {/* Redirect to /upcoming if route does not exist */}
        <Route path="*" element={<Navigate to="/upcoming" />} />
      </Routes>
    </OrdersLayout>
  </Suspense>
);

export default AuthRoutes;
