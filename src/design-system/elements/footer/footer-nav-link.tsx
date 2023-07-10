import Link from "next/link";

const FooterNavLink = ({
  href,
  name,
  id,
}: {
  href: string;
  name: string;
  id: number;
}) => {
  return (
    <li className="cursor-pointer">
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default FooterNavLink;
