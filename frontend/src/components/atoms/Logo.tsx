import Image from "next/image";
import storageAppIcon from "../../images/storage_app_icon.png";

type LogoProps = {
  size: number;
};

export const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <Image
      alt="storage app icon"
      src={storageAppIcon}
      width={size}
      height={size}
    />
  );
};
