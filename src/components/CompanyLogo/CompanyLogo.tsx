import Image, { StaticImageData } from 'next/image';

interface CompanyLogoProps {
  logoPath: StaticImageData;
  alt: string;
  hasBackground?: boolean;
}

export default function CompanyLogo({
  logoPath,
  alt,
  hasBackground = false,
}: CompanyLogoProps) {
  return (
    <>
      {!hasBackground ? (
        <div className="max-w-[200px] max-h-[70px] relative flex aspect-video w-full max-h-15 flex-col items-center justify-center">
          <Image
            className="grayscale-0"
            src={logoPath}
            alt={alt}
            quality={100}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
          <div className="w-full h-full bg-gray-400 mix-blend-darken"></div>
        </div>
      ) : (
        <div className="max-w-[200px] max-h-[70px] relative flex aspect-video w-full max-h-15 flex-col items-center justify-center mix-blend-lighten opacity-70">
          <Image
            src={logoPath}
            alt={alt}
            quality={100}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </>
  );
}
