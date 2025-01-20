import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetTrigger,
} from "@/components/ui/SheetForHeader"
import { contactData } from '@/data/ContactData'
import { Menu } from 'lucide-react'
import ContactMenu from '../../../components/common/ContactMenu'
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
                <NavigationMenuForMobile 
                    immigrateComponents={immigrateComponents}
                    workComponents={workComponents}
                />
                <SheetFooter>
                    <SheetClose asChild>
                        <ContactMenu className="fixed bottom-10" components={contactData}/>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
