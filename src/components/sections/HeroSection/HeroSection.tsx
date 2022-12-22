import Image from 'next/image';
import sailingBg from '../../../../public/images/hero-background-sailing.png';
import fishingBg from '../../../../public/images/hero-background-fishing.jpg';

interface HeroSectionProps {
  type?: 'fishing' | 'sailing';
}

export default function HeroSection({ type = 'sailing' }: HeroSectionProps) {
  return (
    <div className="flex flex-col justify-center h-[820px] w-full relative">
      <div className="w-full h-[820px] absolute">
        {type === 'sailing' ? (
          <Image
            className="object-cover"
            src={sailingBg}
            alt="Ship sailing in the ocean"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            fill
          />
        ) : (
          <Image
            className="object-cover"
            src={fishingBg}
            alt="Fisher ship on the ocean"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            fill
          />
        )}
      </div>

      <div className="flex items-center">
        <div className="flex items-center justify-between">
          <div className="max-w-[600px] pl-12 md:pl-24 pt-20 pb-10 pr-14 rounded-r-3xl bg-gray-700 bg-opacity-20 backdrop-blur-md">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-pw-grey-light">
              Perfect Weather <br />
              For Your Next
              <br />
              Adventure
            </h1>

            <p className="md:text-lg font-normal leading-5 text-pw-grey-light mt-5">
              Leave the forecasts and planning to us! Our powerful <br />
              weather and marine tools take care of everything
              <br /> so you can focus on what you love.
            </p>

            <button className="bg-pw-green rounded-full mt-12 px-8 py-4 font-bold text-pw-grey-light text-sm  hover:brightness-90 transition ease-in-out duration-300">
              Sign up FREE Now
            </button>

            <p className="w-fit text-center ml-2 mt-6 text-pw-grey-light ">
              Join over <span className="font-bold">1 Million+</span> <br />
              marine users worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
