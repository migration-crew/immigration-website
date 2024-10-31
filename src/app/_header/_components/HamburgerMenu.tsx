import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/SheetForHeader"

export default function HamburgerMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className="h-10 w-10" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>sheet title</SheetTitle>
                    <SheetDescription>
                        sheet header
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <p>content</p>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        {/* <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" /> */}
                        <p>content</p>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        {/* <Button type="submit">Save changes</Button> */}
                        <button>footer</button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
