import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { ContactUs } from "@/components/ContactUS";
import Gallery from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import NavBar from "@/components/NavBar";
import { Scroll } from "@/components/Scroll";
import Specials from "@/components/Specials";
import Testimonial from "@/components/Testmonial";
import NavBarItems from "@/data/NavBar";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

// import { authOptions } from "../api/auth/[...nextauth]/route";

const images = [
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-1.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-2.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-3.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-4.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-5.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-6.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-7.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-8.jpg",
];
export default async function Home() {
  // const session = await getServerSession(authOptions);
  // if (!session) redirect("/home");
  return (
    <div>
      <NavBar title="Resturant" items={NavBarItems} />
      <Hero />
      <About />
      <Gallery images={images} />
      <Specials />
      <Menu />
      <Testimonial />
      <Scroll />
      <Booking />
      <ContactUs />
    </div>
  );
}

// import LoginForm from "@/components/LoginForm";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import Page from "./home/page";

// export default async function Home() {
//   const session = await getServerSession(authOptions);

//   if (session) redirect("/home");

//   return (
//     <main>
//       <Page />
//     </main>
//   );
// }
