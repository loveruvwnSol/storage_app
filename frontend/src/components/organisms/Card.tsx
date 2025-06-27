import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Popout } from "../molecules/Popout";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "@/hooks/useAuth";

type CardProps = {
  isSidebarOpen: boolean;
};

export const Card: React.FC<CardProps> = ({ isSidebarOpen }) => {
  const { user } = useCurrentUser();
  const { signout } = useAuth();
  const [isPopoutOpen, setIsPopoutOpen] = useState(false);
  return (
    <div
      className={`fixed bottom-10 ${
        isSidebarOpen ? "" : "left-4"
      } flex items-center justify-between ${
        isSidebarOpen ? "bg-neutral-700" : ""
      } ${isSidebarOpen ? "w-70" : "w-20"} ${
        isSidebarOpen ? "p-3" : "p-0"
      } rounded-2xl`}
    >
      <div className="flex items-center gap-3">
        <div className={`border-2 border-gray-600 rounded-4xl w-10 h-10`}>
          <div
            className={`absolute ${
              isSidebarOpen ? "left-10" : "left-8"
            } w-3 h-3 bg-green-300 opacity-100 rounded-4xl`}
          ></div>
        </div>
        {isSidebarOpen ? (
          <div className="">
            <p>{user?.name}</p>
            <p className="text-sm opacity-60">{user?.email}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="relative">
        <BiDotsVerticalRounded
          onClick={() => setIsPopoutOpen(!isPopoutOpen)}
          size={24}
          className="opacity-50 hover:bg-white/30 rounded-4xl"
        />
        <Popout
          isPopoutOpen={isPopoutOpen}
          label="サインアウト"
          Icon={BiLogOut}
          onClick={(e) => {
            e.preventDefault();
            signout();
          }}
        />
      </div>
    </div>
  );
};
