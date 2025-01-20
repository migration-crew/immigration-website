import Link from "next/link"
import { HeaderComponent } from "../Header"

type Props = {
    components: HeaderComponent[]
}

export default function SubMenu({ components }: Props) {
    return (
        <ul className="w-[400px] m-4 space-y-3">
            {components.map((component, index) => (
                <li key={index}>
                    <Link
                        href={component.href}
                        className={`${index === 0 ? 'font-bold' : ''}`}
                    >
                        {component.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}