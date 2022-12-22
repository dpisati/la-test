import Image from 'next/image';

import mapBg from '../../../../public/images/map.png';

export default function HeatMapSection() {
  return (
    <div className="relative flex aspect-video w-full flex-col items-center justify-center">
      <Image
        src={mapBg}
        alt="Sea heat map"
        quality={100}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
