import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function DiscoverOptionsItemIP({ href, children }: Props) {
  return (
    <Link href={href} className="text-xs py-2 px-4 bg-gray-200 xl:text-base">
      {children}
    </Link>
  );
}
