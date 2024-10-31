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
import { HeaderComponent } from '../Header'

type Props = {
    className: string | undefined
    immigrateComponents: HeaderComponent[]
    workComponents: HeaderComponent[]
}

export default function HamburgerMenu({className, immigrateComponents, workComponents}: Props) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className={`"h-10 w-10" ${className}`} />
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
                        <p>content</p>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <button>footer</button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
