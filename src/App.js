
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import homeP from './pages/Homepage/homeP';
import styled from "styled-components";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;


function App() {
  return (
   <Router>
   
    <Home></Home>
    
   </Router>
  );
}

export default App;
