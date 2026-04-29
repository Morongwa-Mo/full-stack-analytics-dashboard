
import Embeddable from  '../components/Embeddable.jsx';


const changeWords = ['Welcome!', 'Welcome back!'];

function getRandomWord(max) {
    return changeWords[Math.floor(Math.random() * max)];
}

export default function Overview({setActivePage, embeddableId}){
    return (
        <div>

<p className="introPara"> {getRandomWord(changeWords.length)}  </p>
   
    <main>
        <section id="Kpis">
         <Embeddable embeddableId="90c56d19-a74b-4783-a07b-0d7cdefa0b61"/>

        </section>
         </main>
    </div>
    );
}
         