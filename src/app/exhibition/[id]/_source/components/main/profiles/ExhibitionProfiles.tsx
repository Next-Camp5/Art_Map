import Profile from '@/components/common/profile/Profile';

import profileImage from '/public/images/profile.png';

const ExhibitionProfiles = () => {
  return (
    <section className="flex flex-col gap-5 px-4 py-5 border-b border-gray-2">
      <h2 className="text-lg font-bold text-gray-6">연관 프로필</h2>
      <div className="flex gap-2.5">
        <div className="flex flex-col items-center">
          <Profile size="L" imageSrc={profileImage} />
          <span className="text-sm text-gray-7">김영훈</span>
        </div>
        <div className="flex flex-col items-center">
          <Profile size="L" imageSrc={profileImage} />
          <span className="text-sm text-gray-7">김영훈</span>
        </div>
        <div className="flex flex-col items-center">
          <Profile size="L" imageSrc={profileImage} />
          <span className="text-sm text-gray-7">김영훈</span>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionProfiles;
