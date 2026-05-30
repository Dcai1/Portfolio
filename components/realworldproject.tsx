import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  tags: string;
  color?: string;
  icons?: string | string[]; // filename(s) inside /public/icons, e.g. "acme.svg" or "/icons/acme.svg"
}

export const RealWorldProject = ({
  title,
  description,
  url,
  tags,
  color,
  icons,
}: ProjectProps) => {
  const iconsArray = icons ? (Array.isArray(icons) ? icons : [icons]) : [];
  return (
    <div>
      {/* Card */}
      <div
        className={`items-center w-full max-w-2xl p-6 text-center text-snow transition duration-300 transform bg-night/80 border-3 shadow-md rounded-2xl shadow-black hover:shadow-2xl hover:shadow-snow hover:scale-105 hover:backdrop-blur-sm border-snow`}
      >
        {/* Title and Icon */}
        <h2
          className={`mb-3 text-2xl font-bold sm:text-4xl ${
            color ? `${color}` : ""
          } `}
        >
          <div className="flex items-center justify-center gap-3">
            {iconsArray.map((ic) => {
              const src = ic.startsWith("/") ? ic : `/icons/${ic}`;
              return (
                <Image
                  key={src}
                  src={src}
                  alt={`${title} icon`}
                  width={128}
                  height={128}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              );
            })}
            <span>{title}</span>
          </div>
        </h2>
        {/* Description */}
        <p className="mb-5 text-gray-300 sm:text-2xl">{description}</p>

        {/* CtA Button */}
        <Link
          href={url}
          target="_blank"
          className="inline-block px-4 py-2 font-semibold transition rounded-lg text-night hover:scale-110 sm:text-xl bg-fulvous/90 hover:opacity-100 hover:bg-amber-500"
          rel="noopener noreferrer"
        >
          View Project
        </Link>
        <p className="pt-3 italic font-semibold sm:text-lg">{tags}</p>
      </div>
    </div>
  );
};
