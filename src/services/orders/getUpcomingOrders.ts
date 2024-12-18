import api from "@/config/axiosConfig";
import { Order, Result } from "@/types/models.types";

/**
 * Get upcoming orders from the API
 * @returns {Promise<Order[]>} A promise that resolves to an array of orders
 */
export const getUpcomingOrdersService = async (): Promise<Order[]> => {
  const { data: response } = await api.get<Result>("/orders/upcoming");

  // Destructure the result from the response
  const { result: orders } = response;

  return orders;
};
