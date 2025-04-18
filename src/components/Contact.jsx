import { CONTACT } from "../constants";
import Button from "./Button";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
const Contact = () => {
  return (
    
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <div className="mt-10">
      <Button children={"Get in Touch Me"}/>
      </div>
      <div className="mt-10 text-center tracking-tighter flex  itms-center justify-center gap-5">
        <p className="my-4 flex items-center gap-2"><FaLocationDot/> {CONTACT.address}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b flex items-center
        gap-2"><MdOutlineAttachEmail/> {CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contact;

