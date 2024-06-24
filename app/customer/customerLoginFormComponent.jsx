"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { validateCustomerCreds } from "../../actions/customer/queryHandlers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerLoginFormComponent = ({ children }) => {
  const router = useRouter();

  const validateAndLogin = async (formData) => {
    const customerDetails = {
      userName: formData.get("userName"),
      password: formData.get("password")
    };
    try {
      await validateCustomerCreds(customerDetails);
      router.push("/customer/dashboard");
    } catch (error) {
      toast(error.toString());
    }
  };
  return (
    <form className="row g-3 needs-validation" noValidate action={validateAndLogin}>
      <ToastContainer />
      {children}
    </form>
  );
};

export default CustomerLoginFormComponent;