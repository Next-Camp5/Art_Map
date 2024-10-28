'use client';

import { useState } from 'react';

import CollectionBtn from '../../../common/CollectionBtn';

const MyCollectionNav = () => {
  const [selectedBtn, setSelectedBtn] = useState<
    'exhibition' | 'artist' | 'gallery'
  >('exhibition');

  return (
    <nav className="flex items-center">
      <CollectionBtn
        onClick={() => setSelectedBtn('exhibition')}
        isSelected={selectedBtn === 'exhibition'}
      >
        작품
      </CollectionBtn>
      <CollectionBtn
        onClick={() => setSelectedBtn('artist')}
        isSelected={selectedBtn === 'artist'}
      >
        작가
      </CollectionBtn>
      <CollectionBtn
        onClick={() => setSelectedBtn('gallery')}
        isSelected={selectedBtn === 'gallery'}
      >
        전시관
      </CollectionBtn>
    </nav>
  );
};

export default MyCollectionNav;
