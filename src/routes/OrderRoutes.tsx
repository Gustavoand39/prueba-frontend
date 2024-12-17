import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UpcomingOrdersView } from "@/views/orders";
import LoadingState from "@/components/states/LoadingState";

const AuthRoutes: React.FC = () => (
  <Suspense fallback={<LoadingState fullScreen />}>
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" />} />

      <Route path="/upcoming" element={<UpcomingOrdersView />} />

      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  </Suspense>
);

export default AuthRoutes;
