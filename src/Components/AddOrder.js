import React from "react";  

export default function AddOrder(props){
    
    const ENDPOINT = `https://64f2b594edfa0459f6c5f7c7.mockapi.io/Customers/${props.customer.id}`;
    // const newOrderComplete = {
    //     Flowers: props.Flowers,
    //     quantity: props.quantity,
    //     id:Orders     
    //     }
    const addnewOrder = async() => {
       
    try{
        const response = await fetch(ENDPOINT, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                Orders: [...props.customer.Orders, props.newOrders]
            })
            
        });
        console.log('worked');
    }
    catch(err){
        console.error("couldn't add this order", err)
    }
    }
    
}