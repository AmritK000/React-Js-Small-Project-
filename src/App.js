import logo from './logo.svg';
import './App.css';
import Expenitem from './component/Expenitem';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'chandigarh',
    },
    { id: 'e2',
     title: 'New TV',
      amount: 799.49, 
      date: new Date(2021, 2, 12),
      location: 'bombay', },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'noida',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'delhi',
    },
  ];
  let itemList=[];
  expenses.forEach((item,index)=>{
  itemList.push( <li key={index}>{item}</li>)
})
  return (
    <div className="App"> 
     <Expenitem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} location={expenses[0].location}></Expenitem>
     <Expenitem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} location={expenses[1].location}></Expenitem>
     <Expenitem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} location={expenses[2].location}></Expenitem>
     <Expenitem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} location={expenses[3].location}></Expenitem>
     </div>
  );
}

export default App;
