import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  tags: string;
  color?: string;
}

export const Project = ({
  title,
  description,
  url,
  tags,
  color,
}: ProjectProps) => {
  return (
    <div>
      <div
        className={`items-center w-full max-w-2xl p-6 text-center text-snow transition duration-300 transform bg-night/90 border-3 shadow-lg rounded-2xl shadow-black hover:shadow-xl hover:shadow-fulvous hover:scale-105 border-fulvous
        `}
      >
        <h2
          className={`mb-3 text-2xl font-bold sm:text-4xl ${
            color ? `${color}` : ""
          } `}
        >
          {title}
        </h2>
        <p className="mb-5 text-gray-300 sm:text-2xl">{description}</p>
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
