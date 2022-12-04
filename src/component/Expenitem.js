
import './Expenitem.css'
import ExpenDate from './ExpenDate';
function Expenitem (props){

return (
<div className="expense-item">
   <ExpenDate date={props.date}></ExpenDate>
    <div  className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <div className="expense-item__price">{props.location}</div>
    </div>
</div>
);

}
export default Expenitem;