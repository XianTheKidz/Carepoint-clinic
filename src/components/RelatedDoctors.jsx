import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0) {
      const doctorsData = doctors.filter(
        (doc) =>
          doc.speciality === speciality &&
          doc._id !== docId
      );

      setRelDoc(doctorsData);
    }
  }, [doctors, docId, speciality]);

  return (
    <section className="relative mt-2 rounded-4xl bg-linear-to-b from-sky-50 via-cyan-50 to-white px-6 py-12 pb-20 md:px-10">
    {/* Heading */}
    <div className="mb-10 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
        You May Also Like
    </p>

    <h2 className="mt-2 text-4xl font-bold text-slate-800">
        Related Doctors
    </h2>

    <p className="mx-auto mt-3 max-w-2xl text-slate-500">
        Explore more experienced doctors in the same speciality and choose the one
        that best suits your healthcare needs.
    </p>
    </div>

    {/* Cards */}
    <div className="grid gap-6 lg:grid-cols-2">

    {relDoc.slice(0, 4).map((item) => (

    <div
    key={item._id}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="
              group
              flex
              cursor-pointer
              overflow-hidden
              rounded-3xl
              border
              border-sky-100
              bg-white
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-cyan-300
              hover:shadow-xl
              hover:shadow-cyan-200/30
            "
          >

            {/* Image */}
            <div className="w-52 shrink-0 overflow-hidden bg-sky-100">

              <img
                src={item.image}
                alt={item.name}
                className="
                  h-full
                  w-full
                  object-cover
                  object-top
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">

              <h3 className="text-2xl font-bold text-slate-800">
                {item.name}
              </h3>

              <p className="mt-1 font-medium text-cyan-600">
                {item.speciality}
              </p>

              <div className="mt-4 space-y-2">

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <FaGraduationCap className="text-cyan-500" />
                  {item.degree}
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MdWorkHistory className="text-cyan-500" />
                  {item.experience} Experience
                </div>

              </div>

              <p className="mt-4 line-clamp-3 flex-1 text-sm leading-7 text-slate-500">
                {item.about}
              </p>

              <button
                className="
                  mt-5
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  bg-sky-100
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-sky-700
                  transition
                  group-hover:bg-cyan-500
                  group-hover:text-white
                "
              >
                View Profile
                <FaArrowRight className="text-xs" />
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default RelatedDoctors;