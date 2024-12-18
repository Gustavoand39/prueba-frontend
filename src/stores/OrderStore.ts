import { Order } from "@/types/models.types";
import { create } from "zustand";

// States for the OrderStore
interface OrderState {
  isLoading: boolean;
  orders: Order[];
}

// Actions for the OrderStore
interface OrderActions {
  setIsLoading: (isLoading: boolean) => void;
  setOrders: (orders: Order[]) => void;
}

// OrderStore type
type OrderStore = OrderState & OrderActions;

export const useOrderStore = create<OrderStore>((set) => ({
  isLoading: true,
  orders: [],

  setIsLoading: (isLoading) => set({ isLoading }),

  setOrders: (orders) => set({ orders }),
}));
