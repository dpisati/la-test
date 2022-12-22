import Image, { StaticImageData } from 'next/image';

interface UserCardProps {
  name: string;
  subtitle: string;
  review: string;
  picturePath: StaticImageData;
}

export default function UserCard({
  name,
  subtitle,
  review,
  picturePath,
}: UserCardProps) {
  return (
    <div className="max-w-[600px] flex flex-col justify-center bg-pw-grey-light/20 rounded-3xl px-6 py-5 ">
      <div className="flex align-center">
        <Image src={picturePath} width={50} height={50} alt={`User picture`} />
        <div className="flex flex-col justify-center ml-3">
          <p className="text-pw-grey-light text-xs font-bold">{name}</p>
          <span className="text-pw-blue-light text-[11px]">{subtitle}</span>
        </div>
      </div>

      <p className="text-pw-grey-light italic mt-5 text-base opacity-70">
        {review}
      </p>
    </div>
  );
}
