import { Order } from "@/types/models.types";
import { create } from "zustand";

// States for the OrderStore
interface OrderState {
  isLoading: boolean;
  orders: Order[];
  filteredOrders: Order[];
}

// Actions for the OrderStore
interface OrderActions {
  setIsLoading: (isLoading: boolean) => void;
  setOrders: (orders: Order[]) => void;
  filterByOrderNumber: (orderNumber: string) => void;
}

// OrderStore type
type OrderStore = OrderState & OrderActions;

export const useOrderStore = create<OrderStore>((set, get) => ({
  isLoading: true,
  orders: [],
  filteredOrders: [],

  setIsLoading: (isLoading) => set({ isLoading }),

  setOrders: (orders) => set({ orders }),

  filterByOrderNumber: (orderNumber) => {
    const { orders } = get();
    const filtered = orders.filter((order) =>
      order.order_number.startsWith(orderNumber.toUpperCase()),
    );
    set({ filteredOrders: filtered });
  },
}));
