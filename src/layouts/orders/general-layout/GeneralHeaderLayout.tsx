import { Bell, ChevronLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * Title View
 * Contains the title for the Orders Layout
 */
const TitleView: Record<string, string> = {
  "/orders/upcoming": "Upcoming Orders",
  "/orders/:id": "Order Details",
};

/**
 * General Header Layout
 * Contains the header for the Orders Layout
 * @returns {JSX.Element} JSX.Element
 */
const GeneralHeaderLayout = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current path is /orders/:id
  const isOrderDetailsPath = /\/orders\/\d+/.test(location.pathname);

  /**
   * Get Title
   * @returns {string} Title
   */
  const getTitle = (): string => {
    if (isOrderDetailsPath) return "Order Details";
    return TitleView[location.pathname] ?? "Orders";
  };

  /**
   * Handle Back Click
   * @returns {void} Void
   */
  const handleBackClick = (): void => {
    navigate(-1);
  };

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <div>
          {isOrderDetailsPath && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Go back"
              onClick={handleBackClick}
            >
              <ChevronLeft size={24} />
            </Button>
          )}
        </div>

        <div>
          <h1 className="text-xl font-semibold">{getTitle()}</h1>
        </div>

        <div>
          <Button aria-label="Notifications" variant="ghost" size="icon">
            <Bell className="text-custom-primary" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default GeneralHeaderLayout;
