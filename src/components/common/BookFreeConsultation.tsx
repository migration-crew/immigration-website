import Link from "next/link";
import { Button } from "../ui/UpImmigrationButton";

type Props = {
  className?: string | undefined;
}

export function BookFreeConsultation({ className }: Props) {
  return (
    <Button asChild className={className}>
      <Link href="/book-consultation">Book a free consultation</Link>
    </Button>
  );
}
