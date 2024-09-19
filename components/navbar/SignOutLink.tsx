"use client";
import { Bounce, toast } from "react-toastify";
import { SignOutButton } from "@clerk/nextjs";

function SignOutLink() {
  const handleLogout = () => {
    toast.info("You have been signed out.", {
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
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
}
export default SignOutLink;
