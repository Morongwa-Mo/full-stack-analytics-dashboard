import logo from '../assets/wimmylogo.png';
import TabButton from './TabButton.jsx';

export default function Header({setActivePage}){

  
   return (
    <header className="tabs">
        <img src={logo} className="logo" alt="Wimmy logo"/>
        <section  >
              <ul className='tabList'> 
                    <TabButton setActivePage={setActivePage}>Overview</TabButton>
                    <TabButton setActivePage={setActivePage}>Data Exploration</TabButton>
                    <TabButton setActivePage={setActivePage}>Deal Drivers</TabButton>
            </ul>
            </section>
           
    </header>
   );
} 