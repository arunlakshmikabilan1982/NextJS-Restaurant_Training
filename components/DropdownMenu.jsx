import React from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import LoginForm from "./LoginForm";

export default function DropdownMenu() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="dropdown">
          <div className=" flex flex-col gap-2 my-4 ">
            <div>
              Name: <span className="font-bold">{session?.user?.name}</span>
            </div>
            <div>
              Email: <span className="font-bold">{session?.user?.email}</span>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="bg-red-600 items-center justify center text-white font-bold px-3 py-2 my-3 rounded-lg"
          >
            Logout
          </button>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}
