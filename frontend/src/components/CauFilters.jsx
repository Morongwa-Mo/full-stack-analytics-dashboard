export default function CausalFilter ({dateRange, segment, setDateRange, setSegment}) {

    return (
        <main>
        <section  >
            <h2>Filters</h2>

        <label className='filterGroup'>Date Range</label>
        <select value={dateRange} onChange={(e) =>setDateRange(e.target.value)}>
        <option value=''>Select Year </option>   
        <option value='2024'>2024</option>
        <option value='2025'> 2025</option>
        <option value='2026'>2026</option>
        </select>
          
        <label className='filterGroup'>Segments</label>  
        <select value={segment} onChange={(e) => setSegment(e.target.value)}>
        <option value=''> Select Segments</option>
        <option value='Enterprise'> Enterprise</option>
        <option value='Mid-Market'>Mid-Market</option>
        <option value='SBM'>SBM</option>
        </select>

        </section>
        </main>
    );
}