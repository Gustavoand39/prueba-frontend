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
  const { order_number, type, status_string, destinations, status_class } =
    order;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl">
        <span className="text-neutral-400">Order</span>{" "}
        <span>#{order_number}</span>
      </h2>

      <section className="rounded-3xl border-2 border-neutral-600">
        {/* Header */}
        <OrderCardHeader
          type={type}
          statusString={status_string}
          statusClass={status_class}
        />

        {/* Divider */}
        <hr className="border border-neutral-600" />

        {/* Content */}
        <OrderCardContent destinations={destinations} />

        {/* Footer */}
        <OrderCardFooter />
      </section>
    </div>
  );
};

export default OrderCard;
