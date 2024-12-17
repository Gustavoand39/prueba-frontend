import { Bell, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrdersHeader = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <div>
          <Button variant="ghost" size="icon">
            <ChevronLeft size={28} />
          </Button>
        </div>

        <div>
          <h1 className="text-xl font-semibold">Upcoming Orders</h1>
        </div>

        <div>
          <Button variant="ghost" size="icon">
            <Bell className="text-yellow-300" size={28} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default OrdersHeader;
