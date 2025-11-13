import React, { useState } from "react";
import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";

function App() {
  const [editingCustomer, setEditingCustomer] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <CustomerForm
        editingCustomer={editingCustomer}
        onSaved={() => setEditingCustomer(null)}
      />
      <CustomerList onEdit={setEditingCustomer} />
    </div>
  );
}

export default App;
