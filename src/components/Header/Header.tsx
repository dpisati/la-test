import Image from 'next/image';
import logo from '../../../public/images/logo.svg';
import burger from '../../../public/icons/burger.svg';

export default function Header() {
  return (
    <div className="fixed inset-x-0 top-0 w-100 z-10">
      <header className="max-w-[1440px] mx-auto py-6 pl-20 pr-6 flex items-center justify-between z-10">
        <Image src={logo} height={30} alt="PredictWind" />

        <div className="flex text-pw-grey-light">
          <nav className="hidden gap-10 md:flex text-lg">
            <a className="cursor-pointer relative w-max two">
              <span className="text-lg">Pricing</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-[1px] bg-pw-grey-light"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-pw-grey-light"></span>
            </a>
            <a className="cursor-pointer relative w-max two">
              <span>Maps</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-[1px] bg-pw-grey-light"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-pw-grey-light"></span>
            </a>
            <a className="cursor-pointer relative w-max two">
              <span>Features</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-[1px] bg-pw-grey-light"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-pw-grey-light"></span>
            </a>
            <a className="cursor-pointer relative w-max two">
              <span>Contract</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-[1px] bg-pw-grey-light"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-pw-grey-light"></span>
            </a>
          </nav>

          <input
            type="search"
            name="search"
            id="searchInput"
            placeholder="Search"
            className="w-[148px] h-8 ml-8 px-4 text-base bg-transparent rounded-full border-[1px] border-pw-grey-light border-solid placeholder:text-base placeholder:text-pw-grey-light backdrop-blur-md"
          />

          <Image
            className="ml-4"
            src={burger}
            width={17}
            height={17}
            alt="Hamburger menu"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
      </header>
    </div>
  );
}
