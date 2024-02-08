import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import BookingSample from "@/components/BookingSample";
import { Carousel } from "@/components/Carousel";
import { ContactUs } from "@/components/ContactUS";
import Gallery from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import NavBar from "@/components/NavBar";
import { Scroll } from "@/components/Scroll";
import Specials from "@/components/Specials";
import Testimonial from "@/components/Testmonial";
import UserInfo from "@/components/UserInfo";
import NavBarItems from "@/data/NavBar";

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

export default function page() {
  return (
    <div>
      <NavBar title="Resturant" items={NavBarItems} />
      <Hero />
      <About />
      <Gallery images={images} />
      <Specials />
      <Booking />
      <ContactUs />
      <Menu />
      <Testimonial />
      <Scroll />
    </div>
  );
}
