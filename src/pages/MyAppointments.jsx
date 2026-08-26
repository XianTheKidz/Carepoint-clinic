import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="px-4 sm:px-8 lg:px-10 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          My Appointments
        </h1>

        <p className="mt-2 text-sm sm:text-base text-slate-500">
          View and manage your upcoming appointments.
        </p>
      </div>

      {/* Appointment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="
              rounded-2xl
              border border-sky-100
              bg-white
              p-4
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-sky-200
              hover:shadow-lg
            "
          >
            {/* Doctor Information */}
            <div className="flex gap-4">
              {/* Doctor Image */}
              <div className="shrink-0">
                <img
                  className="
                    h-28
                    w-24
                    rounded-xl
                    bg-sky-50
                    object-cover
                    object-top
                  "
                  src={item.image}
                  alt={item.name}
                />
              </div>

              {/* Doctor Details */}
              <div className="min-w-0 flex-1">
                <p className="text-lg font-semibold text-slate-800">
                  {item.name}
                </p>

                <p className="mt-1 text-sm font-medium text-sky-600">
                  {item.speciality}
                </p>

                {/* Address */}
                <div className="mt-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <FaMapMarkerAlt className="text-sky-500" />
                    <span>Address</span>
                  </div>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.address.line1}
                    <br />
                    {item.address.line2}
                  </p>
                </div>

                {/* Date & Time */}
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <FaCalendarAlt className="text-sky-500" />
                    <span>25 July, 2024</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <FaClock className="text-sky-500" />
                    <span>8:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                className="
                  rounded-xl
                  bg-sky-500
                  px-3
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-sky-600
                  hover:shadow-md
                "
              >
                Pay Online
              </button>

              <button
                className="
                  rounded-xl
                  border
                  border-red-200
                  bg-white
                  px-3
                  py-2.5
                  text-sm
                  font-semibold
                  text-red-500
                  transition-all
                  duration-300
                  hover:bg-red-500
                  hover:text-white
                "
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;