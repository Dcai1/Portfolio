import Link from "next/link";

interface ButtonProps {
  url: string;
  text: string;
}

export const Button = ({ url, text }: ButtonProps) => {
  return (
    <Link
      href={url}
      className="inline-block px-4 py-2 mx-auto font-semibold text-black transition rounded-lg hover:scale-110 w-fit bg-fulvous hover:bg-amber-500"
      rel="noopener noreferrer"
    >
      {text}
    </Link>
  );
};
