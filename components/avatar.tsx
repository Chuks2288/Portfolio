import Image from "next/image";

interface AvatarProps {
    src: string;
    alt?: string | any;
}

const Avatar = ({
    src,
    alt
}: AvatarProps) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={70}
            height={70}
            className="object-cover"
        />
    )
}

export default Avatar