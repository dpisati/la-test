import Image from 'next/image';
import phone from '../../../../public/images/phone.png';

export default function NotificationsSection() {
  return (
    <div className="w-full flex flex-col-reverse items-center px-6 pt-24 lg:flex-row lg:items-end justify-between  lg:px-28 text-pw-grey-light pw-gradient-background">
      <div className="w-full max-w-[700px] relative flex aspect-video flex-col items-center justify-center ">
        <Image
          src={phone}
          alt="Mobile app with good weather notification"
          quality={100}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      <div className="mb-20">
        <h3 className="text-4xl font-bold">
          Get notified when <br /> conditions are <br /> perfect
        </h3>
        <p className="text-lg mt-10">
          Set your preferences and relax. We’ll send you <strong>Alerts</strong>
          <br /> when conditions are just the way you like them.
        </p>

        <button className="mt-14 pw-button-gradient text-base w-[210px] py-5 rounded-full font-bold hover:brightness-110 transition">
          Find out more
        </button>
      </div>
    </div>
  );
}
