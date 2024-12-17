import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import OrderRoutes from "./OrderRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/orders/upcoming" />} />

        <Route path="/orders/*" element={<OrderRoutes />} />

        <Route path="*" element={<Navigate to="/orders/upcoming" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
