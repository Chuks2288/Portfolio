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
            width={100}
            height={100}
            className="object-cover"
        />
    )
}

export default Avatar