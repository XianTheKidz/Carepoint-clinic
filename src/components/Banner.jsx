import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { FaStar, FaUserMd } from "react-icons/fa";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-sky-50 py-20 px-4 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================= HERO ================= */}
        <div className="relative overflow-hidden rounded-[34px] shadow-2xl">
          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={assets.banner_video} type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/45"></div>

          {/* Content */}
          <div className="relative flex min-h-130 items-center px-8 py-14 md:px-16">
            <div className="max-w-xl">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <FaStar className="text-cyan-400" />
                Trusted Healthcare Platform
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                <span className="bg-linear-to-r from-cyan-300 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  Your Health
                </span>
                <br />
                <span className="text-white">
                  Our Care
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-lg text-lg leading-8 text-slate-200">
                Patient-centered healthcare with experienced doctors,
                instant online appointments and trusted medical services
                for you and your family.
              </p>

              {/* Button */}
              <button
                onClick={() => {
                  navigate("/login");
                  scrollTo(0, 0);
                }}
                className="mt-10 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* ================= Bottom Cards ================= */}
        <div className="mt-6 grid gap-5 md:grid-cols-4">

          {/* Elder Care */}
          <div className="group relative h-56 overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-300/30">
            <img
              src={assets.elderly}
              alt=""
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/35"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">
                Elder Care
              </h3>
              <p className="mt-1 text-white/80">
                Compassionate treatment
              </p>
            </div>
          </div>

          {/* Pediatrics */}
          <div className="group relative h-56 overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-300/30">
            <img
              src={assets.pediatrics}
              alt=""
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/35"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">
                Pediatrics
              </h3>
              <p className="mt-1 text-white/80">
                Healthy childhood starts here
              </p>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex h-56 flex-col justify-between rounded-3xl bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-300/30">
            <div>
              <p className="text-sm font-medium text-cyan-600">
                Patient Reviews
              </p>
              <h3 className="mt-4 text-2xl font-bold leading-snug text-slate-900">
                Trusted by thousands of patients every year.
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-3">
                <img
                  src={assets.review1}
                  alt=""
                  className="h-11 w-11 rounded-full border-2 border-white"
                />
                <img
                  src={assets.review2}
                  alt=""
                  className="h-11 w-11 rounded-full border-2 border-white"
                />
                <img
                  src={assets.review3}
                  alt=""
                  className="h-11 w-11 rounded-full border-2 border-white"
                />
              </div>
              <div className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700">
                4.9 ★
              </div>
            </div>
          </div>

          {/* Doctors */}
          <div className="group relative h-56 overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-300/30">
            <img
              src={assets.team}
              alt=""
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/35"></div>
            <div className="absolute bottom-6 left-6">
              <FaUserMd className="mb-4 text-3xl text-cyan-300" />
              <h3 className="text-2xl font-bold text-white">
                Expert Doctors
              </h3>
              <p className="text-white/80">
                Specialists you can trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;