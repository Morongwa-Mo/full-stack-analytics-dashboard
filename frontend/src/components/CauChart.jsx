export default function CauCharts({className, title, children, dateRange, segment}) {

    return (
          <div className={className}>
      {title}
      {children}
     <p> {dateRange }</p>
      <p>{segment}</p>
      
    </div>
    );
}