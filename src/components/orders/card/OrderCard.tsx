import { Order } from "@/types/models.types";
import OrderCardHeader from "./OrderCardHeader";
import OrderCardFooter from "./OrderCardFooter";
import OrderCardContent from "./OrderCardContent";

interface OrderCardProps {
  order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg">
        <span className="text-neutral-400">Order</span>{" "}
        <span>#{order.order_number}</span>
      </h2>

      <section className="rounded-3xl border-2 border-neutral-600">
        <OrderCardHeader
          type={order.type}
          status_string={order.status_string}
        />

        <hr className="border border-neutral-600" />

        <OrderCardContent />

        <OrderCardFooter />
      </section>
    </div>
  );
};

export default OrderCard;
