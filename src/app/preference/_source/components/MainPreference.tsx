'use client';

import { useState } from 'react';

import PreferenceArt from './PreferenceArt';
import PreferenceGenre from './PreferenceGenre';
import PreferenceHome from './PreferenceHome';
import Home from '@/app/home/page';

const components = [PreferenceHome, PreferenceArt, PreferenceGenre, Home];
const MainPreference = () => {
  const [id, setId] = useState(0);
  const nextPage = () => {
    setId((prevId) => Math.min(prevId + 1, components.length - 1));
  };
  const prevPage = () => {
    setId((prevId) => Math.max(prevId - 1, 0));
  };
  const skipPage = () => {
    setId(components.length - 1);
  };
  const CurrentComponents = components[id];
  return (
    <>
      <CurrentComponents
        nextPage={nextPage}
        {...(id > 0 && { prevPage })}
        skipPage={skipPage}
      />
    </>
  );
};
export default MainPreference;
