import { useState } from 'react';
import Embeddable from  '../components/Embeddable.jsx';

export default function Causal() {

    const [dateRange, setDateRange] = useState(" ");
    const [segment, setSegment] = useState( " ");

    return (
        <main>
         <p className="introPara"> Investigate why deals are won or lost by analysing key drivers within each industry.</p>   
        <section id="causalAnalysis">
        <Embeddable embeddableId="7799203b-a892-4bb4-8155-4cb7fffc5d46"/>
       </section>
       
        </main>  
    );
}