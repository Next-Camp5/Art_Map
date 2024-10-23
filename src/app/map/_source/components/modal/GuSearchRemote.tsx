import { useState } from 'react';
import GuSearchModal from './GuSearchModal';

interface Props {
  children: React.ReactNode;
}

const GuSearchRemote = ({ children }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div onClick={() => setIsActive(true)}>
      {isActive && <GuSearchModal onClose={() => setIsActive(false)} />}
      {children}
    </div>
  );
};

export default GuSearchRemote;
