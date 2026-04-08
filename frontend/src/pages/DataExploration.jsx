import { useState } from 'react';
import DatFilters from '../components/DataFilters.jsx';
import DataCharts from '../components/DataCharts.jsx';
import Embeddable from  '../components/Embeddable.jsx';


export default function DataExploration() {

  const [dateRange, setDateRange] = useState(" ");
  const [selectedCompany, setSelectedCompany] = useState(" ");
  const [dealStatus, setDealStatus] = useState(" ");

  return (

    <main className="dataExploration">
     {/*<section className='filters'>
      <DatFilters 
        dateRange={dateRange}
        setDateRange={setDateRange}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        dealStatus={dealStatus}
        setDealStatus={setDealStatus}
      />
      </section>
      <section className='Viz'>
        <div className='datHeader'>
          <h1>Raw Data Exploration</h1>
          <p>Analyze detailed metrics and trends with customizable filters</p>
     </div>
    */}
    {/* <section className='datViz'>*/}
      <Embeddable embeddableId="907cb1a8-570f-41c2-9114-7b6bd5d2d59f"/>
         {/*} <DataCharts 
          className='vis1'
          selectedCompany={selectedCompany}
          dateRange={dateRange}
          dealStatus={dealStatus}
          >
            <h2>Visualization 1</h2>
            <p>Visualization 1 will go here</p>
          </DataCharts>

          <DataCharts 
          className='vis2' 
          selectedCompany={selectedCompany}
          dateRange={dateRange}
          dealStatus={dealStatus}
          >
            <h2>Visualization 2</h2>
            <p>Visualization 2 will go here</p>
          </DataCharts >
     </section>

<section className='datViz1'>
          <DataCharts 
          className='vis3' 
          selectedCompany={selectedCompany}
          dateRange={dateRange}
          dealStatus={dealStatus}
          >
            <h2>Table</h2>
            <p>Table will go here</p>
          </DataCharts >

          <DataCharts 
          className='vis4'
           selectedCompany={selectedCompany}
          dateRange={dateRange}
          dealStatus={dealStatus}
          >
            <h2>Insights card</h2>
            <p>Insights will go here</p>
          </DataCharts >
    </section>  
     </section>*/}
    </main>
  );
}