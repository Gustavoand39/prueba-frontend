import clsx from "clsx";
import { Check } from "lucide-react";

interface OrderTimelineProps {
  status: 0 | 1 | 2 | 3;
  driverName: string;
}

interface Step {
  label: string;
  isChecked: boolean;
  isLast?: boolean;
}

const OrderTimeline = ({ status, driverName }: OrderTimelineProps) => {
  const steps: Step[] = [
    { label: "Order created", isChecked: status >= 0 },
    { label: "Order accepted", isChecked: status >= 1 },
    { label: `Order picked up by ${driverName}`, isChecked: status >= 2 },
    { label: "Order delivered", isChecked: status >= 3, isLast: true },
  ];

  return (
    <div className="relative flex flex-col gap-4 p-6">
      {steps.map(({ isChecked, label, isLast }, index) => (
        <div key={index} className="flex items-center gap-4">
          {/* Icon and Line */}
          <div className="relative flex flex-col items-center">
            {/* Icon */}
            <div
              className={clsx(
                "relative flex size-6 items-center justify-center rounded-full",
                {
                  "bg-custom-primary": isChecked,
                  "bg-neutral-600": !isChecked,
                },
              )}
            >
              {isChecked ? (
                <Check size={16} className="text-black" />
              ) : (
                <>
                  <div className="absolute z-10 size-4 rounded-full bg-neutral-400" />
                  <div className="absolute z-20 size-2 rounded-full bg-neutral-200" />
                </>
              )}
            </div>

            {/* Line */}
            {!isLast && (
              <div
                className={clsx("absolute top-6 h-6 w-0.5", {
                  "bg-custom-primary": isChecked,
                  "bg-neutral-600": !isChecked,
                })}
              />
            )}
          </div>

          {/* Text */}
          <div
            className={clsx("text-sm font-semibold", {
              "text-neutral-600": !isChecked,
            })}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderTimeline;
