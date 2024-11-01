import Link from "next/link";
import { Button } from "../ui/UpImmigrationButton";

export function BookFreeConsultation() {
  return (
    <Button asChild>
      <Link href="/book-consultation">Book a free consultation</Link>
    </Button>
  );
}
