import Image from 'next/image';

import locationPhone from '../../../../public/images/locationPhone.png';

export default function ObservationsSection() {
  return (
    <div className="w-full flex flex-col-reverse items-center px-6 pt-24 lg:flex-row lg:items-end justify-between lg:px-28 text-pw-grey-light pw-gradient-background pw-white-layer">
      <div className="w-full max-w-[700px] relative flex aspect-video flex-col items-center justify-center z-10">
        <Image
          src={locationPhone}
          alt="Mobile app with good weather notification"
          quality={100}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      <div className="mb-20 flex flex-col text-center lg:text-start items-center lg:items-start z-10">
        <h3 className="text-4xl font-bold">Know before you head out</h3>
        <p className="text-lg mt-10">
          See what’s happening right now on the water with
          <br /> over 20,000 live weather <strong>Observations</strong>.
        </p>

        <button className="mt-14 pw-button-gradient text-base w-[210px] py-5 rounded-full font-bold hover:brightness-110 transition">
          Find out more
        </button>
      </div>
    </div>
  );
}
