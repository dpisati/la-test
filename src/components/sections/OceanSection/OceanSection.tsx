import Image from 'next/image';
import arrowsAndShip from '../../../../public/images/arrowsAndShip.png';

export default function OceanSection() {
  return (
    <div className="w-full min-h-[544px] flex items-center lg:flex-end justify-center lg:justify-between px-6 lg:pt-6 lg:px-28 text-pw-grey-light pw-gradient-background relative">
      <div className="flex flex-col justify-center items-center z-10 text-center lg:items-start backdrop-blur p-10 lg:mb-20 lg:max-w-sm lg:text-start lg:backdrop-blur-none">
        <h3 className="text-2xl lg:text-4xl font-bold">
          Understand the <br />
          ocean
        </h3>

        <p className="text-sm lg:text-lg mt-10">
          Get the full picture with Ocean Data. Choose from three Ocean Current
          models and high resolution Tidal Data so you know exactly what’s
          happening beneath the surface.
        </p>

        <button className="mt-14 pw-button-gradient text-base w-[210px] py-5 rounded-full font-bold hover:brightness-110 transition">
          Find out more
        </button>
      </div>

      <div className="w-full lg:w-5/6 h-full flex aspect-video flex-col items-center justify-center absolute right-0 bottom-0 z-0">
        <Image
          src={arrowsAndShip}
          alt="Wind arrows and ship sailing"
          quality={100}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
        />
      </div>
    </div>
  );
}
