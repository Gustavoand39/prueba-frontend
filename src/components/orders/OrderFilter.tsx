import clsx from "clsx";
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useOrderStore } from "@/stores/OrderStore";

const NavLinks = [
  { name: "Upcoming orders", path: "/orders/upcoming" },
  { name: "Past orders", path: "/#" },
  { name: "All orders", path: "/#" },
];

const OrderFilter = () => {
  const filterByOrderNumber = useOrderStore(
    (state) => state.filterByOrderNumber,
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterByOrderNumber(e.target.value);
  };

  return (
    <div className="container mx-auto mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
      <nav>
        <ul className="flex gap-6">
          {NavLinks.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  clsx(
                    "block rounded border-b-2 p-1 text-center text-sm hover:border-custom-primary md:p-2 md:text-base",
                    "transition-colors duration-200",
                    {
                      "border-custom-primary text-neutral-100": isActive,
                      "border-transparent text-gray-400": !isActive,
                    },
                  )
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative flex items-center gap-2">
        <Search className="absolute left-2 -z-10" size={20} />
        <input
          type="text"
          className="w-72 rounded-md border-b-2 bg-transparent p-2 pl-10"
          placeholder="Search order: e.g. 1234"
          onChange={handleSearch}
        />
        <p className="sr-only text-gray-400">Search order</p>
      </div>
    </div>
  );
};

export default OrderFilter;
