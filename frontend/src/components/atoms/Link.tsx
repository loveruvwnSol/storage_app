import { ReactNode } from "react";

type LinkProps = {
  description?: string;
  linkText?: string;
  href: string;
  children?: ReactNode;
};

export const Link: React.FC<LinkProps> = ({
  description,
  linkText,
  href,
  children,
}) => {
  return (
    <div className="text-gray-500">
      {description}
      <a
        href={href}
        className="font-semibold text-indigo-400 hover:text-indigo-500"
      >
        {children ? children : linkText}
      </a>
    </div>
  );
};
