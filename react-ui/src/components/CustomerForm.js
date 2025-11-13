import React, { useState, useEffect } from "react";
import { createCustomer, updateCustomer } from "../api/externalApi";

function CustomerForm({ editingCustomer, onSaved }) {
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editingCustomer) {
      setForm(editingCustomer);
    } else {
      setForm({ name: "", email: "" });
    }
  }, [editingCustomer]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form._id) {
      await updateCustomer(form._id, form);
    } else {
      await createCustomer(form);
    }
    onSaved();
    setForm({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{form._id ? "Edit Customer" : "Add Customer"}</h2>
      <input
        type        = "text"
        name        = "name"
        value       = {form.name}
        placeholder = "Name"
        onChange    = {handleChange}
      />
      <input
        type        = "email"
        name        = "email"
        value       = {form.email}
        placeholder = "Email"
        onChange    = {handleChange}
      />
      
      <button type="submit">{form._id ? "Update" : "Create"}</button>
    </form>
  );
}

export default CustomerForm;
