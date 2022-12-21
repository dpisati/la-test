import UserCard from '../UserCard';
import user1 from '../../../public/users/user1.png';
import user2 from '../../../public/users/user2.png';

export default function Users() {
  return (
    <div className="flex flex-col items-center justify-center py-28 font-bold relative gradientBackground">
      <h2 className="text-pw-grey-light text-4xl">
        Join 1M+ marine users worldwide
      </h2>

      <div className="my-16 flex gap-4">
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
          name="Nathan Outteridge"
          subtitle="9x World Champion, Olympic Gold Medalist"
          review="“The most used app on my phone, Don’t know what I’d do without it.”"
          picturePath={user1}
        />
      </div>
    </div>
  );
}
