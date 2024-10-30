import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <Link href="/">
                <Image
                    src={logo}
                    alt="logo image"
                    quality={100}
                    priority
                    className="w-40 lg:w-48"
                />
            </Link>
        </header>
    )
}