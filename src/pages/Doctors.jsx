import {useParams, useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import { FaGraduationCap } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";

const Doctors = () => {
  const navigate = useNavigate();
const { speciality } = useParams();

const { doctors } = useContext(AppContext);

// Filter doctors directly (no useState or useEffect needed)
const filterDoc = speciality
  ? doctors.filter((doc) => doc.speciality === speciality)
  : doctors;

  return (
  <section className="relative overflow-hidden bg-sky-50 px-4 py-16 md:px-10">

    {/* Background Blobs */}
    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl"></div>
    <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl"></div>
    <div className="relative z-10">
      {/* ---------- Page Heading ---------- */}
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-sky-200 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              CarePoint Clinic
            </p>
            <h1 className="text-4xl font-bold text-slate-800 md:text-5xl">
              Find Your Doctor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500">
              Browse our experienced healthcare professionals and choose the right
              specialist for your medical needs.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white px-6 py-4 shadow-sm border border-sky-100">
              <p className="text-sm text-slate-500">
                Medical Experts
              </p>
              <p className="text-3xl font-bold text-cyan-600">
                {filterDoc.length}
              </p>
            </div>
          </div>
        </div>
      <div className="mt-12 flex flex-col gap-8 lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-72 lg:shrink-0">
          <div className="sticky top-28 rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-bold text-slate-800">
              🩺 Specialties
            </h2>
            <div className="space-y-3">
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
                  className={`w-full rounded-full px-5 py-3 text-left font-medium transition-all duration-300 ${
                    speciality === spec
                      ? "bg-linear-to-r from-cyan-500 via-sky-500 to-blue-600 text-white shadow-lg"
                      : "border border-sky-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-600"
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Doctors */}
        <div className="flex-1">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
          "
        >
            {filterDoc.length > 0 ? (
              filterDoc.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => navigate(`/appointment/${item._id}`)}
                    className="group flex cursor-pointer overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-200/40"
                  >
                    {/* Image */}
                    <div className="w-52 xl:w-56 shrink-0 overflow-hidden bg-sky-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex flex-1 flex-col p-8">
                      <span className="mb-3 w-fit rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                        {item.speciality}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-800">
                        {item.name}
                      </h2>
                      <div className="mt-5 space-y-2">
                        <div className="flex items-center gap-2 text-slate-600">
                          <FaGraduationCap className="text-cyan-500" />
                          {item.degree}
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <MdWorkHistory className="text-cyan-500" />
                          {item.experience} Experience
                        </div>
                      </div>
                      <p className="mt-5 line-clamp-4 leading-7 text-slate-500">
                        {item.about}
                      </p>
                      <div className="mt-6 flex items-center justify-between border-t border-sky-100 pt-5">
                      <span className="text-sm font-medium text-emerald-600">
                        ● Available for Consultation
                      </span>
                      <button
                        className="
                          rounded-xl
                          border
                          border-cyan-300
                          bg-cyan-50
                          px-5
                          py-2
                          text-sm
                          font-semibold
                          text-cyan-700
                          transition-all
                          duration-300
                          hover:bg-cyan-500
                          hover:text-white
                        "
                      >
                        Book Now
                      </button>
                    </div>
                    </div>
                  </div>
              ))
            ) : (
              <div className="rounded-3xl border border-dashed border-sky-200 bg-white py-20 text-center">
                <h3 className="text-2xl font-bold text-slate-700">
                  No doctors found
                </h3>
                <p className="mt-2 text-slate-500">
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
}

export default Doctors