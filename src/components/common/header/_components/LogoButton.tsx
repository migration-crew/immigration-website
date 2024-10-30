import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/logo.png'

export default function LogoButton() {
    return (
        <Link href="/">
            <Image
                src={logo}
                alt="logo image"
                quality={100}
                priority
                className="w-40 lg:w-48"
            />
        </Link>
    )
}