import { assets } from "../assets/assets";
import { FaUserDoctor } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const Header = () => {
  return (
    <section className="relative w-full h-[82vh] min-h-162.5 overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={assets.hero_video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/55 transition-all duration-500"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-4 sm:px-[10%] pt-20 pb-12">

        {/* Badge */}
        <div className="mb-5">
          <span className="rounded-full border border-cyan-300 bg-cyan-400/20 px-4 py-1.5 text-sm text-cyan-100 backdrop-blur-md">
            Trusted Healthcare Platform
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-2xl text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="bg-linear-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Your Health,
          </span>
          <br />
          <span className="text-white">
            Our Priority.
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-xl mt-5 text-base leading-7 text-slate-200">
          CarePoint Clinic helps patients connect with trusted healthcare
          professionals, schedule appointments quickly, and receive quality
          medical care with confidence.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">

          <a
            href="#speciality"
            className="rounded-full bg-primary px-6 py-3 text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40"
          >
            Schedule Appointment
          </a>

          <a
            href="/doctors"
            className="rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3 text-white transition-all duration-300 hover:bg-white hover:text-slate-900"
          >
            Explore Doctors
          </a>

        </div>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap gap-4">

          <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <FaUserDoctor className="text-3xl text-cyan-300" />
            <div>
              <h2 className="text-2xl font-bold text-white">20+</h2>
              <p className="text-sm text-slate-200">
                Expert Doctors
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <FaStar className="text-3xl text-yellow-300" />
            <div>
              <h2 className="text-2xl font-bold text-white">4.9★</h2>
              <p className="text-sm text-slate-200">
                Patient Rating
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <MdOutlineAccessTimeFilled className="text-3xl text-cyan-300" />
            <div>
              <h2 className="text-2xl font-bold text-white">24/7</h2>
              <p className="text-sm text-slate-200">
                Online Booking
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Header;
