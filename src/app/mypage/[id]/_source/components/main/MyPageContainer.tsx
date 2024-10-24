import MyInfoSection from '@/app/mypage/[id]/_source/components/main/myInfoSection/MyInfoSection';
import MyCollectionSection from '@/app/mypage/[id]/_source/components/main/myCollectionSection/MyCollectionSection';
import MyTasteAnalysisSection from '@/app/mypage/[id]/_source/components/main/myTasteAnalysisSection/MyTasteAnalysisSection';

const MyPageContainer = () => {
  return (
    <div>
      <main className="pt-2.5 flex flex-col gap-2.5 bg-gray-0 pb-[60px]">
        <h1 className="sr-only">마이페이지</h1>
        <MyInfoSection />
        <MyTasteAnalysisSection />
        <MyCollectionSection />
      </main>
    </div>
  );
};

export default MyPageContainer;
