import logoWhite from '../../../public/logoWhite.png'
import Image from 'next/image';

export default function Logo() {
    return (
        <Image
            src={logoWhite}
            alt="logo image"
            quality={100}
            priority
            className="lg:w-56"
        />
    );
}