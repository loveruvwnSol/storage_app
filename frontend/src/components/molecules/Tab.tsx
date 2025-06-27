import { IconType } from "react-icons";

type TabProps = {
  isSidebarOpen: boolean;
  label: string;
  Icon: IconType;
};

export const Tab: React.FC<TabProps> = ({ isSidebarOpen, label, Icon }) => {
  return (
    <div
      className={`flex items-center gap-3 ${
        isSidebarOpen ? "mt-3 mb-3" : "mt-10 mb-10"
      } ${isSidebarOpen ? "pt-3 pb-3 pl-2 pr-2" : "pl-1"} 
      rounded-2xl text-white font-medium opacity-80  hover:bg-white/30`}
    >
      <Icon size={isSidebarOpen ? 24 : 28} />
      <p>{isSidebarOpen ? label : ""}</p>
    </div>
  );
};
