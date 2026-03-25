export default function ChartCard({ title, children, className, selectedCompany, dateRange, dealStatus }) {
  return (
    <div className={className}>
      {title}
      {children}
     <p> {dateRange }</p>
      <p>{selectedCompany }</p>
      <p> 
      {dealStatus }</p>
    </div>
  );
}