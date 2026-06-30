import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import './Contact.css'
export default function Contact() {
  return (
   <section id="contact" className="contact">

      <h2>Contact</h2>

      <div className="icons">

        <FaGithub />

        <FaLinkedin />

        <FaEnvelope />

      </div>

    </section>
  );
}