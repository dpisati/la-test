import Image from 'next/image';

import mapBg from '../../../../public/images/map.png';
import arrowRight from '../../../../public/icons/arrowRight.svg';
import closeIcon from '../../../../public/icons/closeIcon.svg';

export default function HeatMapSection() {
  return (
    <div className="relative h-[820px] flex aspect-video w-full flex-col items-center justify-center">
      <Image
        src={mapBg}
        alt="Sea heat map"
        quality={100}
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute flex items-center -bottom-6 lg:right-32">
        <button className="w-[270px] bg-pw-green text-pw-grey-light py-3 rounded-full hover:brightness-110 transition-all duration-200 relative">
          Sign Up FREE Now
          <span className="absolute inset-y-0 right-5 flex">
            <Image src={arrowRight} alt="Arrow right" />
          </span>
        </button>
        <button className="w-6 h-6 ml-2 bg-pw-black text-pw-grey-light rounded-full hover:bg-gray-700 transition-all duration-200 flex items-center justify-center">
          <Image src={closeIcon} alt="X" />
        </button>
      </div>
    </div>
  );
}
