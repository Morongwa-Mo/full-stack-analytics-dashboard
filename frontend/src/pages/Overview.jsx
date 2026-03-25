import Intro from '../components/Intro.jsx';
import KPIs from '../components/KPIs.jsx';
import { overviewKPIs } from '../kpiData.js';

const changeWords = ['Welcome!', 'Overview',];

function getRandomWord(max) {
    return changeWords[Math.floor(Math.random() * max)];
}

export default function Overview({setActivePage}){
    return (
        <div>

<p className="introPara"> {getRandomWord(changeWords.length)}  </p>
    <Intro />
    <main>
        <section id="Kpis">
            <h2>Primary KPIS</h2>
            <ul>
                {overviewKPIs.slice(0, 3).map((kpi) =>(<KPIs key={kpi.title} {...kpi} setActivePage={setActivePage} />))}
            </ul>
        </section>
        <section id="secondaryKpis">
            <ul>
               {overviewKPIs.slice(3).map((kpis) => (<KPIs key={kpis.title} {...kpis} setActivePage={setActivePage} />))}
            </ul>
        </section>
    </main>
    </div>
    );
}
         