import React from 'react';
import Infosection from '../../components/InfoSection/Infosection';
import { HomeObjOne } from './data';
const homeP = () => {
  return (
  <>
    <Infosection {...HomeObjOne} id="home"/>
  </>);
};

export default homeP;
