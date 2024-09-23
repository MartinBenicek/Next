import Link from "next/link";
import Image from "next/image";

const HeaderComponent = ({
  url,
  image,
  text,
}: {
  url: string;
  image: string;
  text: string;
}) => {
  return (
    <Link href={url}>
      <span className="flex items-center px-5">
        <div className="relative w-10 h-10 mr-1">
          <Image src={`/img/${image}.svg`} alt={text} fill={true} />
        </div>
        <p className="text-2xl hover:underline">{text}</p>
      </span>
    </Link>
  );
};

export default HeaderComponent;
