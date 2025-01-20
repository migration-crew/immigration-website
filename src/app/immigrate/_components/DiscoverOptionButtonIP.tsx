import { Button } from "@/components/ui/UpImmigrationButton";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export function DiscoverOptionsButtonIP({ href, children }: Props) {
  return (
    <Button asChild variant="secondary" className="py-2 px-4 ">
      <Link href={href} className="text-xs">
        {children}
      </Link>
    </Button>
  );
}
