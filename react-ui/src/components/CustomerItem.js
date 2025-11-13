import React from "react";

function CustomerItem({ customer, onEdit, onDelete }) {
  return (

    <tr>
      <td>{customer.name}</td>
      <td>{customer.email}</td> 
      <td>
        <button onClick={() => onEdit(customer)}>Edit</button>
        <button onClick={() => onDelete(customer._id)}>Delete</button>
      </td>
      
    </tr>
  );
}

export default CustomerItem;
