"use client";

//to provide at least one client component as a parent for the Toaster
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;
