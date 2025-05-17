import { CONTACT } from "../constants";
import Button from "./Button";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachEmail, MdSend } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 px-4 py-20 text-center">
      {/* Headline */}
      <h2 className="text-3xl font-thin text-white mb-4">Let’s Work Together</h2>

      {/* Invitation paragraph */}
      <p className="text-neutral-400 max-w-xl mx-auto mt-2">
        Whether you want to discuss a project or just say hi, feel free to reach out.
        I’m always open to opportunities and collaboration!
      </p>
      {/* CTA Button */}
      <div className="mt-8">
        <Button>
          <span className="flex items-center gap-2">
            Let's Work Together <MdSend />
          </span>
        </Button>
      </div>

      {/* Email & address */}
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 items-center text-neutral-400">
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-green-500" /> {CONTACT.address}
        </div>
        <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:underline">
          <MdOutlineAttachEmail className="text-blue-400" /> {CONTACT.email}
        </a>
      </div>

      {/* Social links */}
      <div className="mt-8 flex justify-center gap-6 text-2xl text-neutral-400">
        <a
          href="https://github.com/Abhiraj35"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/abhiraj-kumar-31648a305"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Personal quote */}
      <p className="text-sm text-neutral-500 mt-12 italic">
        "Let’s build something amazing together!"
      </p>
    </div>
  );
};

export default Contact;
