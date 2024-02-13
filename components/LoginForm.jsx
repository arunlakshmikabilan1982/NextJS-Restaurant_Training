"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// import Register from "@/app/register/page";
import RegisterForm from "./RegisterForm";
import { CSSTransition } from "react-transition-group";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [openRegister, setOpenRegister] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/home");
      // const userDeatils = [...user];
      // const { password, ...userDeatils } = res;
      // console.log("userDetails", userDeatils);
      // console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen ">
      <div className="closeLogin">
        <a href="/" className="confirmClose">
          ❌
        </a>
      </div>
      <div className="bg-white text-black shadow-lg p-5 rounded-lg border-t-4 mb-28 border-green-400">
        <h1 className="text-xl font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-300 text-white font-bold cursor-pointer px-6 py-2">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <div className="RegistrationDropDown">
            {/* <a
              href="#"
              className="icon-button text-sm mt-3 text-right"
              onClick={() => setOpenRegister(!openRegister)}
            >
              <div
                className="text-sm mt-3 text-right"
                onClick={() => props.setOpen(!openRegister)}
              >
                <span> create a newaccount?</span>
                <span className="underline">Register</span>
              </div>
            </a>

            {openRegister && <RegisterForm />} */}
          </div>
        </form>
      </div>
    </div>
  );
}
