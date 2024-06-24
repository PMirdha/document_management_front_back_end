"use client";
import React from 'react';
import { createCustomerCommand } from "../../../actions/customer/commandHandlers";
import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerRegisterFormComponent = ({ children }) => {

  const createCustomer = async (formData) => {
    const customerDetails = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password")
    };
    try {
      await createCustomerCommand(customerDetails);
      redirect("/customer");
    } catch (error) {
      toast("Facing issue try after some time");
    }

  };
  return (
    <form className="row g-3 needs-validation" noValidate action={createCustomer}>
      <ToastContainer />
      {children}
    </form>
  );
};

export default CustomerRegisterFormComponent;