import { Skeleton } from "@/components/ui/skeleton";

/**
 * Shows a skeleton for the order card
 * @returns {JSX.Element} Order Card Skeleton Component
 */
const OrderCardSkeleton = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-6 w-48 rounded-3xl" />
      <Skeleton className="h-[330px] rounded-3xl" />
    </div>
  );
};

export default OrderCardSkeleton;
