import clsx from "clsx";
import { Spinner } from "@/components/ui/spinner";

interface LoadingStateProps {
  fullScreen?: boolean;
}

/**
 * Shows a loading state with a message
 * @param {LoadingStateProps} props - The props of the component
 * @property {boolean} props.fullScreen - If the loading state should be full screen
 * @returns {JSX.Element} The loading state component
 */
const LoadingState = ({
  fullScreen = false,
}: LoadingStateProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center justify-center space-y-4",
        {
          "h-screen": fullScreen,
          "h-full": !fullScreen,
        },
      )}
    >
      <Spinner className="text-gray-300" size="large" />
    </div>
  );
};

export default LoadingState;
