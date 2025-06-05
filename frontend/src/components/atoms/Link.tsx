type LinkProps = {
  description?: string;
  linkText?: string;
  href: string;
};

export const Link: React.FC<LinkProps> = ({ description, linkText, href }) => {
  return (
    <p className=" text-gray-500">
      {description}
      <a
        href={href}
        className="font-semibold text-indigo-600 hover:text-indigo-500"
      >
        {linkText}
      </a>
    </p>
  );
};
