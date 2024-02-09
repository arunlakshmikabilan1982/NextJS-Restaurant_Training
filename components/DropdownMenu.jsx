"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import LoginForm from "./LoginForm";
import { CSSTransition } from "react-transition-group";
import RegisterForm from "./RegisterForm";

export default function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("home");
  const { data: session } = useSession();

  function DropdownItems(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="p-2 rounded-lg items-center justify-center">
          {props.children}
        </span>
      </a>
    );
  }

  return (
    <div>
      {session ? (
        <div className="nav-item">
          <div className="sessionIN bg-black-140">
            <div className="  flex flex-col gap-2 my-4 ">
              <div>
                Name: <span className="font-bold">{session?.user?.name}</span>
              </div>
              <div>
                Email: <span className="font-bold">{session?.user?.email}</span>
              </div>
            </div>
            <div className="grid place-items-center">
              <button
                onClick={() => signOut()}
                className="bg-red-600 grid place-items-center justify-center text-white font-bold px-3 py-2 rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <CSSTransition
            in={activeMenu === "home"}
            unmountOnExit
            timeout={500}
            classNames="home"
          >
            <div className="connnectToSession">
              <DropdownItems
                className="gap-2 my-4 items-center justify-center text-white"
                goToMenu="login"
              >
                LOGIN
              </DropdownItems>

              <DropdownItems
                className="flex flex-col gap-2 my-4 items-center justify-center"
                goToMenu="register"
              >
                REGISTER
              </DropdownItems>
            </div>
          </CSSTransition>
          <CSSTransition
            in={activeMenu === "login"}
            unmountOnExit
            timeout={500}
            classNames="login"
          >
            <div className="readyToLogin">
              <LoginForm />
              <DropdownItems goToMenu="home">Register</DropdownItems>
            </div>
          </CSSTransition>
          <CSSTransition
            in={activeMenu === "register"}
            unmountOnExit
            timeout={500}
            classNames="register"
          >
            <div className="readyToRegister">
              <RegisterForm goToMenu="home" />
            </div>
          </CSSTransition>
        </div>
      )}
    </div>
  );
}
