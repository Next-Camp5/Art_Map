import Profile from '@/components/common/profile/Profile';

interface ArtistListProps {
  name: string;
  genre: string;
}

const ArtistList = ({ name, genre }: ArtistListProps) => {
  return (
    <div className="flex items-center gap-[15px]">
      <Profile size="L" />
      <div className="flex flex-col gap-1 text-gray-600">
        <span className="font-bold">{name}</span>
        <div>
          <p className="text-sm">{genre}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistList;
