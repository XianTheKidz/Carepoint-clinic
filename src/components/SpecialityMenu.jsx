import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12">

      {/* Heading */}
      <h2
        className="
          text-center
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-bold
          text-slate-800
        "
      >
        Explore Medical Specialties
      </h2>

      {/* Description */}
      <p
        className="
          mt-4
          mx-auto
          max-w-2xl
          text-center
          leading-7
          text-gray-500
          text-sm
          sm:text-base
        "
      >
        Choose the healthcare service you need and connect with experienced
        specialists ready to provide professional care at CarePoint Clinic.
      </p>

      {/* Cards */}
      <div
        className="
          mt-10
          sm:mt-14
          grid
          grid-cols-2
          gap-4
          w-full
          sm:flex
          sm:flex-wrap
          sm:justify-center
          sm:gap-6
        "
      >
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            className="
              group
              relative
              flex
              w-full
              h-36
              sm:w-40
              sm:h-44
              flex-col
              items-center
              justify-center
              rounded-3xl
              border
              border-sky-200
              bg-white
              p-3
              sm:p-6
              shadow-md
              transition-all
              duration-500
              ease-in-out
              hover:-translate-y-2
              hover:border-cyan-400
              hover:shadow-2xl
              hover:shadow-cyan-300/30
            "
          >
            {/* Icon */}
            <img
              className="
                w-16
                h-16
                sm:w-20
                sm:h-20
                mb-3
                sm:mb-4
                transition-all
                duration-500
                group-hover:scale-110
              "
              src={item.image}
              alt={item.speciality}
            />

            {/* Text */}
            <p
              className="
                text-center
                text-sm
                sm:text-base
                font-semibold
                text-slate-700
                transition-colors
                duration-300
                group-hover:text-cyan-600
              "
            >
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SpecialityMenu;