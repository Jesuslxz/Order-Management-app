import React, {useState} from "react"; 


export default function DeleteCustomer(props){

    const ENDPOINT = `https://64f2b594edfa0459f6c5f7c7.mockapi.io/Customers/${props.id}`;

    const [deleted, setDelete] = useState(false)
    
   const handleDelete = async() => {
        try{
            const response = await fetch(ENDPOINT, {
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                }});
            setDelete(true);
             alert(`Customer ${props.id} deleted!`);
             props.onCustomerDeleted(props.id);
            console.log('deleted');      
        }
        catch(err){
            console.error("couldn't delete this customer", err)
        }
    }
    return(
        <div>
            <button className="btn btn-danger" onClick={handleDelete}> Delete Customer</button>
        </div>
    )
}