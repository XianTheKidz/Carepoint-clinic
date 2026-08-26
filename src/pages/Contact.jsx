import {assets} from '../assets/assets'
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaUserPlus,
} from "react-icons/fa";

const Contact = () => {
  const navigate = useNavigate();
return (
  <div className="pb-24">
    {/* Heading */}
    <div className="pt-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
        Get In Touch
      </p>
      <h1 className="mt-2 text-4xl font-bold text-slate-800">
        Contact CarePoint
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-slate-500">
        We're here to answer your questions and help you book appointments
        quickly and conveniently.
      </p>
    </div>
    {/* Content */}
  <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-10 px-6 lg:flex-row">
  {/* Left Video */}
  <div className="lg:w-[42%]">
    <div className="overflow-hidden rounded-3xl shadow-lg">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-200 w-full object-cover"
      >
        <source
          src={assets.contact_video}
          type="video/mp4"
        />
      </video>
    </div>
  </div>
  {/* Right */}
  <div className="flex flex-1 flex-col gap-4">
    {/* Address */}
    <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <FaMapMarkerAlt className="text-sky-600 text-lg" />
        <h3 className="text-lg font-bold text-slate-800">
          Visit Our Clinic
        </h3>
      </div>
      <p className="mt-2 text-[15px] leading-7 text-slate-600">
        CarePoint Clinic
        <br />
        128 Kensington High Street
        <br />
        Kensington, London W8 7RL
        <br />
        United Kingdom
      </p>
    </div>
    {/* Contact */}
    <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <h3 className="text-lg font-bold text-slate-800">
          Contact Information
        </h3>
      </div>
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-sky-500 text-sm" />
          <span className="text-slate-600">
            +44 20 6956 1867
          </span>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-sky-500 text-sm" />
          <span className="text-slate-600">
            carepo1ntclinic@gmail.com
          </span>
        </div>
      </div>
    </div>
    {/* Hours */}
    <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <FaClock className="text-sky-600 text-lg" />
        <h3 className="text-lg font-bold text-slate-800">
          Opening Hours
        </h3>
      </div>  
      <div className="mt-3 space-y-3">
        <div className="flex items-center justify-between text-[15px] text-slate-600">
          <span className="font-medium">Open Daily</span>
          <span>10:00 AM – 8:30 PM</span>
        </div>
        <div className="h-px bg-sky-100"></div>
        <p className="text-sm leading-6 text-slate-500">
          Our healthcare professionals are available every day to assist you
          with appointments and consultations.
        </p>
      </div>
    </div>
    {/* CTA */}
    <div className="rounded-3xl border border-sky-100 bg-sky-50 p-8 shadow-sm">
      <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-700">
        Join CarePoint
      </span>
      <div className="flex items-center gap-3">
        <FaUserPlus className="text-sky-600 text-xl" />
        <h3 className="text-2xl font-bold text-slate-800">
          Ready to Book an Appointment?
        </h3>
      </div>
      <p className="mt-3 leading-7 text-slate-600">
        Create your CarePoint account to book appointments, manage your schedule,
        and access trusted healthcare professionals anytime.
      </p>
      <button
        onClick={() => navigate("/login")}
        className="
          mt-6
          rounded-xl
          bg-sky-600
          px-7
          py-3
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-sky-700
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        Create Account
      </button>
    </div>
      </div>
    </div>
    </div>
);
}

export default Contact