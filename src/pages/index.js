import React, {useState} from 'react';
import BlueSection from '../components/BlueSection';
import { FirstSection } from '../components/FirstSection';
import HowMuch from '../components/howmuch/howmuch';
import { Infosec } from '../components/InfoSection/infosectionelements';
import { Navbar } from '../components/Navbar';
import Scroll from '../components/scroll';
import Sidebar from '../components/Sidebar';

import Slider from '../components/Slider/Slider'
const Home = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}



  return (
  <>
  <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
  <Navbar toggle={toggle}></Navbar>
  <Scroll showBelow={25} />
  <FirstSection></FirstSection>
  <BlueSection></BlueSection>
  
  <HowMuch></HowMuch>
  </>);
};

export default Home;
