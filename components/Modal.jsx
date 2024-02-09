"use client";
import React from "react";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import { useSession } from "next-auth/react";
import LoginForm from "./LoginForm";

export default function App() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <div className="absolute top-0 right-9 h-16 w-16 ...">
      <a
        href="#"
        className="icon-button"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(!open)}
      >
        <img
          src="http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
          alt="profile"
          className="ProfileImage"
        />
      </a>
      {open && <DropdownMenu />}
    </div>
  );
}

// {open && (
//   <div>
//     {session ? (
//       <div className="dropdown">
//         <div className=" flex flex-col gap-2 my-4 ">
//           <div>
//             Name: <span className="font-bold">{session?.user?.name}</span>
//           </div>
//           <div>
//             Email:{" "}
//             <span className="font-bold">{session?.user?.email}</span>
//           </div>
//         </div>
//         <button
//           onClick={() => signOut()}
//           className="bg-red-600 items-center justify center text-white font-bold px-3 py-2 my-3 rounded-lg"
//         >
//           Logout
//         </button>
//       </div>
//     ) : (
//       <div className="dropdown">
//         <div className=" flex flex-col gap-2 my-4 ">
//           {/* <div>
//             Name: <span className="font-bold">{session?.user?.name}</span>
//           </div> */}
//           <button
//             className="bg-green-600 items-center justify center text-white font-bold px-3 py-2 my-3 rounded-lg"
//             onClick={() => setLogin(!login)}
//           >
//             Login
//           </button>
//           {login && (
//             <div className="loginDropDown">
//               {setOpen}
//               <LoginForm />
//             </div>
//           )}

//           <div>
//             Email:{" "}
//             <span className="font-bold">{session?.user?.email}</span>
//           </div>
//         </div>
//         <button
//           onClick={() => signOut()}
//           className="bg-red-600 items-center justify center text-white font-bold px-3 py-2 my-3 rounded-lg"
//         >
//           Logout
//         </button>
//       </div>
//     )}
//   </div>
// )}

{
  // <div className="loginDropDown">
  //   <LoginForm setOpen={setOpen} />
  // </div>
  /* <DropdownMenu setOpen={setOpen} /> */
}
// <div className="">
//   <Button onPress={onOpen} onMouseEnter={onOpen} className="ModalButton">
//     <img
//       src="http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
//       alt="profile"
//       className="ProfileImage"
//     ></img>
//   </Button>
//   <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
//     <ModalContent>
//       {(onClose) => (
//         <>
//           <ModalHeader className="flex flex-col gap-1">
//             User Profile
//           </ModalHeader>
//           <ModalBody className="">
//             <div>
//               Name: <span className="font-bold">{session?.user?.name}</span>
//             </div>
//             <div>
//               Email:{" "}
//               <span className="font-bold">{session?.user?.email}</span>
//             </div>
//           </ModalBody>
//           <ModalFooter>
//             <Button
//               color="danger"
//               variant="light"
//               onPress={() => {
//                 !value && onClose;
//               }}
//             >
//               Close
//             </Button>
//             <Button onClick={() => signOut()} className="bg-red-500">
//               Log Out
//             </Button>{" "}
//           </ModalFooter>
//         </>
//       )}
//     </ModalContent>
//   </Modal>
// </div>
