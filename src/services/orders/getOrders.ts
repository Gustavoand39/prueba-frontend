import api from "@/config/axiosConfig";
import { Orders, ResultOrders } from "@/types/models.types";

export const getOrdersService = async (): Promise<Orders> => {
  const { data: response } = await api.get<ResultOrders>("/orders");

  // Destructure the result from the response
  const { result: orders } = response;

  return orders;
};
