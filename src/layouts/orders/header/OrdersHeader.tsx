import { Bell, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

/**
 * Title View
 * Contains the title for the Orders Layout
 */
const TitleView: Record<string, string> = {
  "/orders/upcoming": "Upcoming Orders",
};

/**
 * Orders Header Component
 * Contains the header for the Orders Layout
 * @returns {JSX.Element} Orders Header Component
 */
const OrdersHeader = (): JSX.Element => {
  const location = useLocation();

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <div>
          <Button variant="ghost" size="icon">
            <ChevronLeft size={24} />
          </Button>
        </div>

        <div>
          <h1 className="text-xl font-semibold">
            {TitleView[location.pathname] ?? "Orders"}
          </h1>
        </div>

        <div>
          <Button variant="ghost" size="icon">
            <Bell className="text-custom-primary" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default OrdersHeader;
