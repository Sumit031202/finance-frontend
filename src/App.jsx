import React,{useEffect,useState} from 'react';
import api from './api'

function App(){
    const [expenses,setExpense]=useState([]);

    useEffect(()=>{
        api.get('./test-expense')
        .then(response=>{
            console.log("Date recieved: ",response.data);
            setExpense(response.data);
        })
        .catch(error=>{
            console.log("The handshake failded:",error);
        });
    },[]);

    return (
        <div className='p-10 bg-slate-100 min-h-screen'>
            <h1 className='text-3xl font-bold text-slate-800 mb-6'>Finance Tracker</h1>

            <div className="grid gap-4">
                {expenses.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                        <p className="text-lg font-semibold text-slate-700">{item.description}</p>
                        <p className="text-blue-600 font-bold">₹{item.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default App;