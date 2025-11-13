import React, { useEffect, useState } from "react";
import { getCustomers, deleteCustomer } from "../api/externalApi";
import CustomerItem from "./CustomerItem";

function CustomerList({ onEdit }) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    loadCustomers();
  };

  return (
    <div>
      <h2>Customers</h2>
      <table>
        {customers.map((c) => (
          <CustomerItem
            key={c._id}
            customer={c}
            onEdit={onEdit}
            onDelete={handleDelete}
          />
        ))}
      </table>
    </div>
  );
}

export default CustomerList;
