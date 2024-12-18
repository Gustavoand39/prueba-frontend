import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy-loaded views
const UpcomingOrdersView = lazy(
  () => import("@/views/orders/UpcomingOrdersView"),
);
const DetailsOrderView = lazy(() => import("@/views/orders/DetailsOrderView"));

// Components
import LoadingState from "@/components/states/LoadingState";
import GeneralOrderLayout from "@/layouts/orders/general-layout/GeneralOrderLayout";
import FilterOrderLayout from "@/layouts/orders/filter-layout/FilterOrderLayout";

const AppRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<LoadingState fullScreen />}>
        <Routes>
          {/* Redirect root to orders/upcoming */}
          <Route path="/" element={<Navigate to="/orders/upcoming" />} />

          {/* Orders routes */}
          <Route path="/orders/*" element={<GeneralOrderLayout />}>
            <Route path="upcoming" element={<FilterOrderLayout />}>
              <Route index element={<UpcomingOrdersView />} />
            </Route>

            <Route path=":id" element={<DetailsOrderView />} />

            {/* Redirect invalid routes to orders/upcoming */}
            <Route path="*" element={<Navigate to="/orders/upcoming" />} />
          </Route>

          {/* Redirect any invalid route */}
          <Route path="*" element={<Navigate to="/orders/upcoming" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
