 export default function Tabs({children, setActivePage}) {
    return (
        <li>
               <button onClick={() => setActivePage(children)}> {children} </button>
        </li>
    );
}