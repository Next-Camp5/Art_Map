import Image from 'next/image';

import PosterSection from './_source/components/main/poster/PosterSection';
import ExhibitionDetail from './_source/components/main/detail/ExhibitionDetail';
import ExhibitionProfiles from './_source/components/main/profiles/ExhibitionProfiles';
import ExhibitionOverview from './_source/components/main/overview/ExhibitionOverview';

import videoImage from '/public/images/video.png';

const Exhibition = () => {
  return (
    <div>
      <header></header>
      <PosterSection />
      <main className="bg-white absolute top-[520px] left-0 rounded-t-[20px] pb-[100px]">
        <ExhibitionOverview />
        <ExhibitionDetail />
        <ExhibitionProfiles />
        <section className="flex flex-col gap-5 px-4 py-5">
          <h2 className="text-lg font-bold text-gray-6">전시소개</h2>
          <div className="flex flex-col gap-2.5">
            <figure>
              <Image src={videoImage} alt="전시전경" width={343} height={210} />
              <figcaption className="text-sm text-gray-7 text-center mt-2.5">
                전시전경
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Exhibition;
