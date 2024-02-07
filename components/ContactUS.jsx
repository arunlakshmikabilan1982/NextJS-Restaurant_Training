import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { Heading } from "./Heading";
import { Underline } from "./Underline";

export function ContactUs() {
  return (
    <div className="contactUS">
      <Heading title="contact" description="Contact Us" />
      <div className="ContactUsMain">
        <ContactInfo />
        <ContactForm />
      </div>
      <div className="center">
      <Underline />
      </div>
      
    </div>
  );
}
