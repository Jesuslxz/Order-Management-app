import React, {useState} from "react";
import AddOrder from "./AddOrder";


export default function CreateCustomerInput (props) {
//gives the orders array of each individual customer for every instance of each input
    const [orders , SetOrders] = useState(props.customers[props.id].orders);
    const [orderName, setOrderName] = useState('');
    const [newOrder, setNewOrder] = useState({});
    const [quantity, setQuantity] = useState(0);

    const handleOrderAddition = () => {


        const uniqueId = Date.now();

        setNewOrder({
            order: orderName,
            quantity: quantity,
            id: uniqueId
        });

       //adds the new order to the array
        SetOrders(prevOrders => [...prevOrders, newOrder]);
        //sends the newly updated orders to the add order component to do a put request
        <AddOrder customer = {props.customers[props.id]} newOrders = {orders}/>
    }

    console.log(orders)
    return(
        <div>
            <form className="form-inline">
                        <input type="text" id ={5} className= "form-control mt-4" placeholder="Order" onChange={(e) => setOrderName(e.target.value)}></input>    
                        <input type="text" className= "form-control mt-4" placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)}></input>   
                        <button className=" btn btn-success m-2" onClick = {handleOrderAddition}>Add order </button>
                        
            </form>
        </div>
    )
}