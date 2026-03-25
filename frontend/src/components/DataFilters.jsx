import { useState } from 'react';


export default function DatFilters({ dateRange,selectedCompany,dealStatus,setDateRange, setSelectedCompany, setDealStatus }) {
    
    return (
        <main >
        <section  >
            <h2>Filters</h2>
          
      <label className='filterGroup'>Date Range</label>  
        <select value={dateRange}onChange={(e) =>setDateRange(e.target.value)}>
        <option value=''> Select Year</option>
        <option value='2024'> 2024</option>
        <option value='2025'>2025</option>
        <option value='2026'> 2026</option>
        </select>

        <label className='filterGroup'>Company</label>
        <select value={selectedCompany} onChange={(e) =>setSelectedCompany(e.target.value)}>
        <option value=''> Select Company</option>   
        <option value='Dischem'>Dischem</option>
        <option value='HST'>HST</option>
        <option value='DGMT'>DGMT</option>
        </select>


        <label className='filterGroup'>Deal Status</label>
        <select value={dealStatus} onChange={(e) =>setDealStatus(e.target.value)}>
        <option value=''>Select Deal Status</option>
        <option value='Lead'>Lead</option>
        <option value='Open'>Open</option>
        <option value='Closed'>Closed</option>
        </select>
          </section>        

        </main>  
    );
}