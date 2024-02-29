"use client";
import React from "react";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  let value = false;

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
