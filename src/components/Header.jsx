import { assets } from "../assets/assets";

import { FaUserDoctor } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const Header = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden
        min-h-180
        sm:min-h-175
        lg:h-[82vh] lg:min-h-162.5
      "
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={assets.hero_video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/55"></div>

      {/* Content */}
      <div
        className="
          relative z-10 flex h-full flex-col justify-center
          px-6 pt-20 pb-12
          sm:px-8
          lg:px-[10%] lg:pt-20 lg:pb-12
        "
      >
        {/* Badge */}
        <div className="mb-4 sm:mb-5">
          <span
            className="
              inline-block rounded-full
              border border-cyan-300
              bg-cyan-400/20
              px-3 py-1.5
              text-xs text-cyan-100
              backdrop-blur-md
              sm:px-4 sm:text-sm
            "
          >
            Trusted Healthcare Platform
          </span>
        </div>

        {/* Heading */}
        <h1
          className="
            max-w-2xl
            text-4xl font-bold leading-[1.08]
            sm:text-5xl
            md:text-6xl
            lg:text-7xl lg:leading-tight
          "
        >
          <span
            className="
              bg-linear-to-r
              from-cyan-300 via-sky-300 to-blue-400
              bg-clip-text text-transparent
              animate-gradient
            "
          >
            Your Health,
          </span>

          <br />

          <span className="text-white">
            Our Priority.
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-xl
            text-sm leading-6 text-slate-200
            sm:text-base sm:leading-7
          "
        >
          CarePoint Clinic helps patients connect with trusted healthcare
          professionals, schedule appointments quickly, and receive quality
          medical care with confidence.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-6
            flex flex-col gap-3
            sm:flex-row sm:flex-wrap
          "
        >
          <a
            href="#speciality"
            className="
              w-fit
              rounded-full
              bg-primary
              px-6 py-3
              text-sm font-semibold text-white
              shadow-md
              transition-all duration-300
              hover:scale-105
              hover:shadow-cyan-400/40
              sm:text-base
            "
          >
            Schedule Appointment
          </a>

          <a
            href="/doctors"
            className="
              w-fit
              rounded-full
              border border-white/30
              bg-white/10
              px-6 py-3
              text-sm text-white
              backdrop-blur-md
              transition-all duration-300
              hover:bg-white
              hover:text-slate-900
              sm:text-base
            "
          >
            Explore Doctors
          </a>
        </div>

        {/* Stats */}
        <div
          className="
            mt-8
            grid grid-cols-2 gap-3
            sm:flex sm:flex-wrap sm:gap-4
          "
        >
          {/* Doctors */}
          <div
            className="
              flex items-center gap-2
              rounded-2xl
              border border-white/20
              bg-white/10
              px-4 py-3
              shadow-lg
              backdrop-blur-md
              transition-all duration-300
              hover:-translate-y-1
              hover:scale-105
              sm:gap-3 sm:px-6 sm:py-4
            "
          >
            <FaUserDoctor className="shrink-0 text-2xl text-cyan-300 sm:text-3xl" />

            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                20+
              </h2>

              <p className="text-xs text-slate-200 sm:text-sm">
                Expert Doctors
              </p>
            </div>
          </div>

          {/* Rating */}
          <div
            className="
              flex items-center gap-2
              rounded-2xl
              border border-white/20
              bg-white/10
              px-4 py-3
              shadow-lg
              backdrop-blur-md
              transition-all duration-300
              hover:-translate-y-1
              hover:scale-105
              sm:gap-3 sm:px-5 sm:py-3
            "
          >
            <FaStar className="shrink-0 text-2xl text-yellow-300 sm:text-3xl" />

            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                4.9★
              </h2>

              <p className="text-xs text-slate-200 sm:text-sm">
                Patient Rating
              </p>
            </div>
          </div>

          {/* Online Booking */}
          <div
            className="
              col-span-2
              flex items-center gap-2
              rounded-2xl
              border border-white/20
              bg-white/10
              px-4 py-3
              shadow-lg
              backdrop-blur-md
              transition-all duration-300
              hover:-translate-y-1
              hover:scale-105
              sm:col-span-1
              sm:gap-3 sm:px-6 sm:py-4
            "
          >
            <MdOutlineAccessTimeFilled className="shrink-0 text-2xl text-cyan-300 sm:text-3xl" />

            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                24/7
              </h2>

              <p className="text-xs text-slate-200 sm:text-sm">
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