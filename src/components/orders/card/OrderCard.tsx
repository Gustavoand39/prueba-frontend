import { Order } from "@/types/models.types";
import OrderCardHeader from "./OrderCardHeader";
import OrderCardFooter from "./OrderCardFooter";
import OrderCardContent from "./OrderCardContent";

interface OrderCardProps {
  order: Order;
}

/**
 * Order Card Component
 * @param {OrderCardProps} props - Order Card Props
 * @property {Order} props.order - Order
 * @returns {JSX.Element} Order Card Component
 */
const OrderCard = ({ order }: OrderCardProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl">
        <span className="text-neutral-400">Order</span>{" "}
        <span>#{order.order_number}</span>
      </h2>

      <section className="rounded-3xl border-2 border-neutral-600">
        {/* Header */}
        <OrderCardHeader
          type={order.type}
          status_string={order.status_string}
        />

        {/* Divider */}
        <hr className="border border-neutral-600" />

        {/* Content */}
        <OrderCardContent destinations={order.destinations} />

        {/* Footer */}
        <OrderCardFooter />
      </section>
    </div>
  );
};

export default OrderCard;
