import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AppContext } from "../context/AppContext";

import { FaGraduationCap } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";

const Doctors = () => {
  const navigate = useNavigate();

  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);

  // Filter doctors
  const filterDoc = speciality
    ? doctors.filter((doc) => doc.speciality === speciality)
    : doctors;

  return (
    <section className="relative overflow-hidden bg-sky-50 px-4 py-12 sm:px-6 md:px-10 md:py-16">
      
      {/* Background Blobs */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ==================== PAGE HEADING ==================== */}
        <div className="mb-10 flex flex-col gap-6 border-b border-sky-200 pb-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 sm:text-sm">
              CarePoint Clinic
            </p>

            <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl md:text-5xl">
              Find Your Doctor
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base md:text-lg">
              Browse our experienced healthcare professionals and choose the
              right specialist for your medical needs.
            </p>
          </div>

          {/* Doctor Count */}
          <div className="w-fit rounded-2xl border border-sky-100 bg-white px-5 py-3 shadow-sm sm:px-6 sm:py-4">
            <p className="text-xs text-slate-500 sm:text-sm">
              Medical Experts
            </p>

            <p className="text-2xl font-bold text-cyan-600 sm:text-3xl">
              {filterDoc.length}
            </p>
          </div>
        </div>

        {/* ==================== MAIN CONTENT ==================== */}
        <div className="mt-10 flex flex-col gap-8 lg:flex-row">

          {/* ==================== SIDEBAR ==================== */}
          <div className="w-full lg:w-72 lg:shrink-0">
            <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm lg:sticky lg:top-28 lg:p-6">

              <h2 className="mb-5 text-lg font-bold text-slate-800 sm:text-xl">
                🩺 Specialties
              </h2>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {[
                "General physician",
                "Gynecologist",
                "Dermatologist",
                "Pediatrician",
                "Neurologist",
                "Gastroenterologist",
              ].map((spec) => (
                <button
                  key={spec}
                  onClick={() =>
                    speciality === spec
                      ? navigate("/doctors")
                      : navigate(`/doctors/${spec}`)
                  }
                  className={`w-full rounded-xl px-3 py-3 text-center text-sm font-medium transition-all duration-300 sm:px-5 lg:rounded-full lg:text-left ${
                    speciality === spec
                      ? "bg-linear-to-r from-cyan-500 via-sky-500 to-blue-600 text-white shadow-lg"
                      : "border border-sky-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-600"
                  }`}
                >
                  {spec}
                </button>
              ))}

              {/* Clear Filter */}
              <button
                onClick={() => navigate("/doctors")}
                className="
                  mt-1
                  w-full
                  rounded-xl
                  border border-slate-200
                  bg-slate-50
                  px-3 py-3
                  text-center
                  text-sm font-semibold
                  text-slate-500
                  transition-all duration-300
                  hover:border-red-200
                  hover:bg-red-50
                  hover:text-red-500
                  sm:px-5
                  lg:rounded-full
                  lg:text-left
                "
              >
                Clear Filter
              </button>
            </div>
            </div>
          </div>

          {/* ==================== DOCTORS ==================== */}
          <div className="min-w-0 flex-1">

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

              {filterDoc.length > 0 ? (

                filterDoc.map((item) => (

                  <div
                    key={item._id}
                    onClick={() =>
                      navigate(`/appointment/${item._id}`)
                    }
                    className="
                      group
                      flex
                      min-w-0
                      cursor-pointer
                      flex-col
                      overflow-hidden
                      rounded-3xl
                      border
                      border-sky-100
                      bg-white
                      shadow-sm
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-cyan-300
                      hover:shadow-xl
                      hover:shadow-cyan-200/40

                      lg:flex-row
                    "
                  >

                    {/* ==================== DOCTOR IMAGE ==================== */}
                  <div
                    className="
                      w-full
                      shrink-0
                      overflow-hidden
                      bg-sky-50

                      lg:w-52
                      xl:w-56
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        block
                        h-auto
                        w-full
                        object-contain

                        lg:h-full
                        lg:object-cover
                        lg:object-top
                      "
                    />
                  </div>

                    {/* ==================== DOCTOR INFORMATION ==================== */}
                    <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6 lg:p-7">

                      {/* Speciality */}
                      <span className="mb-3 w-fit rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                        {item.speciality}
                      </span>

                      {/* Doctor Name */}
                      <h2 className="wrap-break-word text-xl font-bold text-slate-800 sm:text-2xl">
                        {item.name}
                      </h2>

                      {/* Degree + Experience */}
                      <div className="mt-4 space-y-2">

                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <FaGraduationCap className="shrink-0 text-cyan-500" />
                          <span>{item.degree}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <MdWorkHistory className="shrink-0 text-cyan-500" />
                          <span>
                            {item.experience} Experience
                          </span>
                        </div>

                      </div>

                      {/* About Doctor */}
                      <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-500 sm:mt-5">
                        {item.about}
                      </p>

                      {/* Availability + Book Button */}
                      <div className="mt-5 border-t border-sky-100 pt-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                          {/* Available Bubble */}
                          <span className="
                            flex
                            w-fit
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-emerald-200
                            bg-emerald-50
                            px-3
                            py-1.5
                            text-xs
                            font-semibold
                            text-emerald-600
                          ">
                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                            Available for Consultation
                          </span>

                          {/* Book Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/appointment/${item._id}`);
                            }}
                            className="
                              w-full
                              rounded-xl
                              border
                              border-cyan-300
                              bg-cyan-50
                              px-5
                              py-2.5
                              text-sm
                              font-semibold
                              text-cyan-700
                              transition-all
                              duration-300
                              hover:bg-cyan-500
                              hover:text-white
                              sm:w-auto
                            "
                          >
                            Book Now
                          </button>

                        </div>
                      </div>

                    </div>
                  </div>

                ))

              ) : (

                /* ==================== NO DOCTORS ==================== */
                <div className="col-span-full rounded-3xl border border-dashed border-sky-200 bg-white px-5 py-16 text-center">

                  <h3 className="text-xl font-bold text-slate-700 sm:text-2xl">
                    No doctors found
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 sm:text-base">
                    Try selecting another specialty.
                  </p>

                </div>

              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;