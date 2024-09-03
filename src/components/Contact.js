import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  return (
    <div
      id="contact"
      className="h-screen flex flex-col px-5 items-center justify-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Contact Me
      </h2>
      <div className="flex items-center gap-12 justify-centerspace-y-4">
        <a
          href="https://github.com/vojtechlevi"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:underline flex flex-col gap-2"
        >
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </a>
        <a
          href="www.linkedin.com/in/leviekström"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:underline flex flex-col gap-2"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/vl.codes"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:underline flex flex-col gap-2"
        >
          <FontAwesomeIcon icon={faInstagram} />
          Instagram
        </a>
      </div>
    </div>
  );
}
