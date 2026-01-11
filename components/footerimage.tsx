import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  href: string;
  src: string;
  alt: string;
  title: string;
}

export const FooterImage = ({ href, src, alt, title }: FooterProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt={alt}
        title={title}
        width={30}
        height={30}
        className="transition hover:opacity-80 hover:scale-120 active:scale-95"
      />
    </Link>
  );
};
