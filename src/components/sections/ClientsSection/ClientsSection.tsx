import UserCard from '../../UserCard';
import CompanyLogo from '../../CompanyLogo';

import user1 from '../../../../public/users/user1.png';
import user2 from '../../../../public/users/user2.png';
import user3 from '../../../../public/users/user3.png';

import bAndG from '../../../../public/companies/bAndG.svg';
import emirates from '../../../../public/companies/emirates.svg';
import oceanNavigator from '../../../../public/companies/oceanNavigator.svg';
import pirelli from '../../../../public/companies/pirelli.svg';
import raymarine from '../../../../public/companies/raymarine.svg';
import sailWorld from '../../../../public/companies/sailWorld.svg';
import saltyDawg from '../../../../public/companies/saltyDawg.svg';
import seven from '../../../../public/companies/seven.svg';

export default function ClientsSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 lg:py-28 px-6 md:px-28 font-bold relative pw-gradient-background">
      <h2 className="text-pw-grey-light text-center text-2xl md:text-4xl">
        Join 1M+ marine users worldwide
      </h2>

      <div className="my-16 flex flex-col gap-4 lg:flex-row xl:px-20">
        <UserCard
          name="Nathan Outteridge"
          subtitle="9x World Champion, Olympic Gold Medalist"
          review="“The most used app on my phone, Don’t know what I’d do without it.”"
          picturePath={user1}
        />
        <UserCard
          name="Ed Gorman"
          subtitle="Sailing Correspondent, The Times, 1996-2006"
          review="“Completely reliable, an essential part of the daily routine onboard.”"
          picturePath={user2}
        />
        <UserCard
          name="Tim Scullin"
          subtitle="Startup sailer and tech enthusiast"
          review="“Passionate about technology and AI. A bit slow these days because of covid... 🥲 ”"
          picturePath={user3}
        />
      </div>

      <div className="w-full flex flex-col gap-8 lg:flex-row p-4 items-center">
        <CompanyLogo logoPath={bAndG} alt="bAndG" />
        <CompanyLogo logoPath={emirates} alt="emirates" />
        <CompanyLogo logoPath={oceanNavigator} alt="oceanNavigator" />
        <CompanyLogo logoPath={pirelli} alt="pirelli" />
        <CompanyLogo logoPath={raymarine} alt="raymarine" />
        <CompanyLogo logoPath={sailWorld} alt="sailWorld" hasBackground />
        <CompanyLogo logoPath={saltyDawg} alt="saltyDawg" hasBackground />
        <CompanyLogo logoPath={seven} alt="seven" />
      </div>
    </div>
  );
}
