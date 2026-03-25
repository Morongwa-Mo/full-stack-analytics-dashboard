export default function KPIs({className, title, value, targetPage, setActivePage}) {
    return (
        <li className={className} onClick={() =>{ console.log("clicked", title, targetPage); setActivePage(targetPage) }}>
        <h3> {title} </h3>
        <p> {value} </p>
        </li>

    );
}