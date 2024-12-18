interface DestinationCardHeaderProps {
  referenceNumber: string;
  orderNumber: string;
}

const DestinationCardHeader = ({
  orderNumber,
  referenceNumber,
}: DestinationCardHeaderProps) => {
  return (
    <header className="flex items-center justify-between">
      <h2>
        <span className="text-neutral-400">Reference</span>{" "}
        <span>#{referenceNumber}</span>
      </h2>

      <div>
        <span className="text-neutral-400">Order</span>{" "}
        <span>#{orderNumber}</span>
      </div>
    </header>
  );
};

export default DestinationCardHeader;
