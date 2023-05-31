export default function MonthlyView(props){
    const months = Array.from({ length: props.days }, (_, index) => (
        <div key={index + 1}>{index + 1}</div>
      ))
    
    return(
        <div className="monthsview">
            {months}
        </div>
    )
}