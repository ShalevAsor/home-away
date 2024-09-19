"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { actionFunction } from "@/utils/types";
import { Bounce, toast } from "react-toastify";
const initialState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useFormState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast.info(state.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
