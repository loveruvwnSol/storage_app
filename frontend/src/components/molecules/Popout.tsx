import { IconType } from "react-icons";

type PopoutProps = {
  isPopoutOpen: boolean;
  label: string;
  Icon?: IconType;
  onClick?: (e: any) => void;
};

export const Popout: React.FC<PopoutProps> = ({
  isPopoutOpen,
  label,
  Icon,
  onClick,
}) => {
  return (
    <>
      {isPopoutOpen ? (
        <div
          onClick={onClick}
          className="flex z-50 items-center gap-3 absolute left-2 p-3 border-2 border-gray-300 rounded-2xl bg-white text-black w-50 cursor-pointer hover:bg-gray-200"
        >
          {Icon && <Icon size={24} />}
          <p>{label}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
