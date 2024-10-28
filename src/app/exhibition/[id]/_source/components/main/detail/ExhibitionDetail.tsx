const ExhibitionDetail = () => {
  return (
    <section className="py-5 px-4 border-b border-gray-2">
      <h2 className="sr-only">전시 상세정보</h2>
      <dl>
        <div className="flex text-sm mb-5">
          <dt className="font-bold w-[85px]">관람 시간</dt>
          <dd>10:00 ~ 18:00 (입장마감 17:30)</dd>
        </div>
        <div className="flex text-sm mb-5">
          <dt className="font-bold w-[85px]">휴관일</dt>
          <dd>매주 월요일</dd>
        </div>
        <div className="flex text-sm mb-5">
          <dt className="font-bold w-[85px]">입장료</dt>
          <dd>
            <span className="block">성인 15,000원</span>
            <span className="block">청소년 13,000원</span>
          </dd>
        </div>
        <div className="flex text-sm mb-5">
          <dt className="font-bold w-[85px]">전화번호</dt>
          <dd>02-123-4567</dd>
        </div>
        <div className="flex text-sm mb-5">
          <dt className="font-bold w-[85px]">주소</dt>
          <dd>서울특별시 강남구 테헤란로 14길 6 남도빌딩 4층</dd>
        </div>
        <div className="flex text-sm mb-5">
          <dt className="font-bold w-[85px]">참여 작가</dt>
          <dd>김영훈, 김영훈, 김영훈, 김영훈</dd>
        </div>
      </dl>
    </section>
  );
};

export default ExhibitionDetail;
