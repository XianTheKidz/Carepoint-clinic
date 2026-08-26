import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { AppContext } from "../context/AppContext";
import Reveal from "./Reveal";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className="relative overflow-hidden bg-sky-50 py-16 px-4 md:px-10">

      {/* Background Decoration */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="relative z-10">

        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-slate-800">
              Meet Our Medical Experts
            </h1>

            <p className="mt-3 leading-7 text-slate-500">
              Connect with experienced healthcare professionals dedicated to
              providing exceptional medical care for you and your family.
            </p>
          </div>
        </Reveal>

        {/* Doctor Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">

          {doctors.slice(0, 6).map((item, index) => (

        <Reveal key={item._id} delay={index * 0.08}>
        <div
          onClick={() => navigate(`/appointment/${item._id}`)}
          className="
            group
            flex
            h-84
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
            hover:shadow-cyan-200/40
          "
        >
          {/* Left Image */}
          <div className="w-2/5 bg-sky-100 overflow-hidden shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="
                h-full
                w-full
                object-cover
                object-top
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-1 flex-col p-7">

            <h2 className="text-2xl font-bold text-slate-800">
              {item.name}
            </h2>

            <p className="mt-1 font-medium text-cyan-600">
              {item.speciality}
            </p>

            <div className="mt-4 space-y-2">

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <FaGraduationCap className="text-cyan-500" />
                <span>{item.degree}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MdWorkHistory className="text-cyan-500" />
                <span>{item.experience} Experience</span>
              </div>

            </div>

            {/* About */}
            <p className="mt-5 flex-1 text-[15px] leading-7 text-slate-500 overflow-hidden">
              {item.about}
            </p>

          </div>
        </div>
      </Reveal>

          ))}

        </div>

        {/* Button */}
        <div className="mt-14 flex justify-center">

          <button
            onClick={() => navigate("/doctors")}
            className="
              rounded-full
              bg-primary
              px-8
              py-3
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-cyan-400/40
            "
          >
            View All Doctors
          </button>

        </div>

      </div>

    </section>
  );
};

export default TopDoctors;