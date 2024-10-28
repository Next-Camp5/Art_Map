import Profile from '@/components/common/profile/Profile';

interface ExhibitionListProps {
  name: string;
}

const ExhibitionList = ({ name }: ExhibitionListProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <Profile size="L" />
      <span>{name}</span>
    </div>
  );
};

export default ExhibitionList;
