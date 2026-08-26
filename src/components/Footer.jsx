import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-0">
      <div className="bg-sky-100">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">

            {/* Left Section */}
            <div>
              <h2 className="text-3xl font-bold text-sky-700">
                Carepoint Clinic
              </h2>
              <p className="mt-4 max-w-md leading-7 text-slate-600">
                Carepoint Clinic provides trusted healthcare services,
                making it easy to find experienced doctors, book appointments,
                and receive quality medical care with confidence.
              </p>
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-500">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow transition hover:bg-[#1877F2] hover:text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow transition hover:bg-linear-to-r hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow transition hover:bg-[#0A66C2] hover:text-white"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            {/* Company */}
            <div>
              <h3 className="mb-5 text-xl font-semibold text-slate-800">
                Company
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li>
                  <Link to="/" className="hover:text-sky-600 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-sky-600 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/doctors" className="hover:text-sky-600 transition">
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-sky-600 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 text-xl font-semibold text-slate-800">
                Get In Touch
              </h3>
              <div className="space-y-4 text-slate-600">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-sky-600" />
                  <span>+44 20 6956 1867</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-sky-600" />
                  <span>carepo1ntclinic@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-sky-200 bg-sky-200">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col items-center justify-between gap-2 text-sm text-slate-600 md:flex-row">
            <p>© 2026 Carepoint Clinic. All Rights Reserved.</p>
            <p>Healthcare Appointment System</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;