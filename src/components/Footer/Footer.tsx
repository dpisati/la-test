import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center px-4 lg:px-24 text-pw-grey-light pw-gradient-background">
      <div className="w-full max-w-[120px] lg:max-w-[200px] relative flex aspect-video flex-col items-center justify-center ">
        <Image
          src={logo}
          alt="PredictWind"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          className="object-contain"
        />
      </div>

      <div className="flex items-center">
        <p className="text-xs lg:text-sm mr-2">Copyright © 2022</p>
        <a
          className="text-xs lg:text-sm"
          href="https://la.agency/"
          rel="noreferrer"
          target="_blank"
        >
          LA Agency
        </a>
      </div>
    </footer>
  );
}
