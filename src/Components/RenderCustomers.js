import React, { useEffect, useState } from "react";  
import DeleteCustomer from './DeleteCustomer';
import CreateCustomerInput from "./CreateCustomerInput";

export default function RenderCustomers (){
    
    const ENDPOINT = 'https://64f2b594edfa0459f6c5f7c7.mockapi.io/Customers'
    
    const [customers , SetCustomers] = useState([]);
    

    const handleCustomerDeletion = (deletedId) => { // updates the state of this component when the delete component is pressed causing it to re-render to the DOM
        const updatedCustomers = customers.filter(customer => customer.id !== deletedId);
        SetCustomers(updatedCustomers);};

    useEffect (() => { //renders customers from database when this component is loaded;
        const getCustomers = async () => {
            try {
                const response = await fetch(ENDPOINT);
                const customersJSON = await response.json();
                SetCustomers(customersJSON);
                return console.log(customersJSON);
            }
            catch (err){
                console.error(err);
                return console.log('Something went wrong when aquiring data');
            }
        };
        getCustomers();
    }, []);

 



    return(
        <div className="container-fluid">
            
           <ul className="list-group">
               {customers.map((customer, index) => (
                   <li className="list-group-item" key={customer.id}> {customer.name} 
                   <span> <DeleteCustomer id = {customer.id} onCustomerDeleted = {handleCustomerDeletion} /> </span>
                   <div className="container-fluid">
                    <CreateCustomerInput customers= {customers} id = {index}/> 

                {/* listing the orders with each delete button */}
                  </div> 
                    {customer.orders.map(order => 
                    (<ul className>
                       <li><strong>Order: </strong>{order.flower} 
                       <li>amount: {order.quantity}</li>
                       <li>id: {order.id}</li>
                       <button className="btn btn-danger m-1"  > Delete order</button></li>
                    </ul>))}
                    </li>
               ))}
           </ul>
        </div>
    )
}

// onClick={<DeleteOrder orderIndex = {index}/>}