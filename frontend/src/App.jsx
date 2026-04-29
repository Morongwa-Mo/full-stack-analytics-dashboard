  
import { useState } from 'react';
import Header from './components/Header.jsx'; 
import Overview from './pages/Overview.jsx';
import DataExploration from './pages/DataExploration.jsx';
import Drivers from './pages/DataDrivers.jsx';


export default function App() {

  const [activePage, setActivePage] = useState('Overview');

  return (
    <div>
    <Header setActivePage={setActivePage} />

    {activePage === "Overview" && <Overview setActivePage={setActivePage}/>}
    {activePage === "Data Exploration" && <DataExploration />}
    {activePage === "Deal Drivers" && <Drivers />}

    </div>
  )    
}

