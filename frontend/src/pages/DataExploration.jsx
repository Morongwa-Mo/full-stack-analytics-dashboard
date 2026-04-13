import { useState } from 'react';
import DatFilters from '../components/DataFilters.jsx';
import DataCharts from '../components/DataCharts.jsx';
import Embeddable from  '../components/Embeddable.jsx';


export default function DataExploration() {
  const [variables, setVariables] = useState({
    industry: "",
  });

  const [dateRange, setDateRange] = useState(" ");
  const [selectedCompany, setSelectedCompany] = useState(" ");
  const [dealStatus, setDealStatus] = useState(" ");

  return (

    <main>
      <p className="introPara">

    Explore deal distribution across industries and stages to identify patterns and trends.</p>
     <section id="DataExploration">

      <Embeddable embeddableId="907cb1a8-570f-41c2-9114-7b6bd5d2d59f"/>

    </section>

    </main>
  );
}