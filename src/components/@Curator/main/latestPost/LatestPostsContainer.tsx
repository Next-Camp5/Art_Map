import Post from "../../common/Post";

const LatestPostsContainer = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-[20px]">최신글</h2>
      <div>
        {Array.from({ length: 5 }).map((_, idx) => (
          <Post key={idx} />
        ))}
      </div>
    </div>
  );
};

export default LatestPostsContainer;
