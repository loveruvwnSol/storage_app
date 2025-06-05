type LogoProps = {
  size: string;
};

export const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <img
      alt="storage app logo"
      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
      className={`mx-auto h-${size} w-auto`}
    />
  );
};
