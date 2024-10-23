'use client';

import { useState } from 'react';

import EmailVeriContainer from './emailveri/EmailVeriContainer';
import LoginContainer from './login/LoginContainer';
import ProfileContainer from './profile/ProfileContainer';
import PWVeriContainer from './pwveri/PWVeriContainer';
import SignUpContainer from './signup/SignUpContainer';
import TermContainer from './term/TermContainer';

const components = [
  LoginContainer,
  SignUpContainer,
  EmailVeriContainer,
  PWVeriContainer,
  ProfileContainer,
  TermContainer,
];
const MainLogin = () => {
  const [id, setId] = useState(0);
  const nextPage = () => {
    setId((prevId) => Math.min(prevId + 1, components.length - 1));
  };
  const prevPage = () => {
    setId((prevId) => Math.max(prevId - 1, 0));
  };
  const CurrentComponents = components[id];
  return (
    <>
      <CurrentComponents nextPage={nextPage} {...(id > 0 && { prevPage })} />
    </>
  );
};
export default MainLogin;
