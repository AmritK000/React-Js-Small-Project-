import './ExpensDate.css';

function ExpensDate(props)
{
const day = props.date.toLocaleString('en-US',{month:'long'});
const month =props.date.toLocaleString('en-Us',{day:'2-digit'});
const year = props.date.getFullYear();  
return(
    <div className="expense-date ">
    <div className="expense-date__month"><h2>{month}</h2></div>
    <div className="expense-date__year "><h2>{day}</h2></div>
    <div className="expense-date__day "><h2>{year}</h2></div>
    
</div>
);
}

 export default ExpensDate;