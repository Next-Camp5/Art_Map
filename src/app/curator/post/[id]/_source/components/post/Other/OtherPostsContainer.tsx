import Post from '@/app/curator/_source/components/common/Post';

const OtherPostsContainer = () => {
  return (
    <div className="mb-[40px]">
      <p className="text-md font-bold mb-[20px]">큐레이터의 다른 글</p>
      {Array.from({ length: 10 }).map((_, idx) => (
        <Post key={idx} />
      ))}
    </div>
  );
};

export default OtherPostsContainer;
