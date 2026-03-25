import { useState } from 'react';
import CauFilters from '../components/CauFilters.jsx';
import CauCharts from '../components/CauChart.jsx';

export default function Causal() {

    const [dateRange, setDateRange] = useState(" ");
    const [segment, setSegment] = useState( " ");

    return (
        <main className="causal">
        <section className='casFilters' >
         <CauFilters
          dateRange={dateRange}
          setDateRange={setDateRange}
          segment={segment}
          setSegment={setSegment}
        />
        </section>
    
        <section className='Visuals'>
        <div className='casHeader'>
            <h1>Causal Analysis Results</h1>
            <p>Understanding the causal relationships between variables and outcomes</p>
        </div>
        <section className='casKPIs'>
        <CauCharts className='KPI1'>
            <h2>KPI1</h2>
            <p>A KPI tile will go here.</p>
            {dateRange}
            {segment}
        </CauCharts>
        <CauCharts
           className='KPI2'>
            <h2>KPI2</h2>
            <p>A KPI tile will go here.</p>
             {dateRange}
            {segment}
      </CauCharts> 
        <CauCharts className='KPI3'>
            <h2>KPI3</h2>
            <p>A KPI tile will go here.</p>
             {dateRange}
            {segment}
       </CauCharts>  
        </section>
        <section className='vizInsight'>
          <CauCharts className='casVis'>
            <h2>Causal visual</h2>
            <p>A chart will go here</p>
             {dateRange}
            {segment}
        </CauCharts>
        <CauCharts className='KPI4'>
            <h2>Insights card</h2>
            <p>Insights will go here</p>
             {dateRange}
            {segment}
       </CauCharts>
        </section>
        </section>
       
        </main>  
    );
}