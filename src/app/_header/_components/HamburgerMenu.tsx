import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetTrigger,
} from "@/components/ui/SheetForHeader"
import { HeaderComponent } from '../Header'
import NavigationMenuForMobile from './NavigationMenuForMobile'

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
                <NavigationMenuForMobile />
                <SheetFooter>
                    <SheetClose asChild>
                        <button>footer</button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
