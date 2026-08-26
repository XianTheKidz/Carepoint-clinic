import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const docInfo = doctors.find((doc) => doc._id === docId);

const [docSlots, setDocSlots] = useState([]);
const [slotIndex, setSlotIndex] = useState(0);
const [slotTime, setSlotTime] = useState("");

useEffect(() => {
  if (!docInfo) return;

  const slots = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    const endTime = new Date(today);
    endTime.setDate(today.getDate() + i);
    endTime.setHours(21, 0, 0, 0);

    if (i === 0) {
      currentDate.setHours(
        currentDate.getHours() > 10
          ? currentDate.getHours() + 1
          : 10
      );
      currentDate.setMinutes(
        currentDate.getMinutes() > 30 ? 30 : 0
      );
    } else {
      currentDate.setHours(10, 0, 0, 0);
    }

    const timeSlots = [];

    while (currentDate < endTime) {
      timeSlots.push({
        datetime: new Date(currentDate),
        time: currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }

    // If there are no slots left today, keep today's date
    if (timeSlots.length === 0) {
      const dateOnly = new Date(today);
      dateOnly.setDate(today.getDate() + i);
      dateOnly.setHours(10, 0, 0, 0);

      timeSlots.push({
        datetime: dateOnly,
        time: "",
      });
    }

    slots.push(timeSlots);
  }

  setDocSlots(slots);
}, [docInfo]);

if (!docInfo) {
  return (
    <div className="py-20 text-center text-lg text-slate-600">
      Loading...
    </div>
  );
}

  return (
    <div>
  {/* Doctor Details */}
  <div className="flex flex-col gap-8 lg:flex-row">

    {/* Doctor Image */}
    <div className="w-full lg:w-80">
      <img
        src={docInfo.image}
        alt={docInfo.name}
        className="
          h-130
          w-full
          rounded-3xl
          bg-sky-100
          object-cover
          object-top
          shadow-lg
        "
      />
    </div>
    {/* Doctor Information */}
    <div
      className="
        flex
        h-130
        flex-1
        flex-col
        rounded-3xl
        border
        border-sky-100
        bg-white
        p-8
        shadow-sm
      "
    >
      {/* Name */}
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-4xl font-bold text-slate-800">
          {docInfo.name}
        </h1>
        <img
          src={assets.verified_icon}
          alt=""
          className="w-6"
        />
      </div>
      {/* Badges */}
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
          {docInfo.speciality}
        </span>
        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
          {docInfo.degree}
        </span>
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
          {docInfo.experience}
        </span>
      </div>
      {/* About */}
      <div className="mt-6">
        <h3 className="mb-2 text-lg font-semibold text-slate-800">
          About
        </h3>
        <p className="leading-7 text-slate-500">
          {docInfo.about}
        </p>
      </div>
      {/* Contact */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Phone
          </p>
          <p className="mt-1 text-[15px] font-medium text-slate-700">
            {docInfo.phone}
          </p>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Email
          </p>
          <p className="mt-1 break-all text-[15px] font-medium text-slate-700">
            {docInfo.email}
          </p>
        </div>
      </div>
      {/* Fee */}
      <div className="mt-auto rounded-2xl bg-linear-to-r from-sky-50 to-cyan-50 p-5">
        <p className="text-sm font-medium text-slate-500">
          Consultation Fee
        </p>
        <div className="mt-2 flex items-end gap-2">
          <span className="text-3xl font-bold text-sky-600">
            {currencySymbol}{docInfo.fees}
          </span>
          <span className="pb-1 text-sm text-slate-500">
            per visit
          </span>
        </div>
      </div>
    </div>
  </div>
    {/* Booking Section */}
    <div className="mt-14 rounded-3xl border border-sky-100 bg-white p-8 shadow-sm">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-slate-800">
        Choose Your Appointment
      </h2>
      <p className="mb-8 text-slate-500">
        Select your preferred date and available time.
      </p>
      {/* Date */}
      <div className="flex flex-wrap gap-4">
      {docSlots.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setSlotIndex(index);
            setSlotTime("");
          }}
          className={`
            w-24
            cursor-pointer
            rounded-2xl
            border
            p-4
            text-center
            transition-all
            duration-300
            ${
              slotIndex === index
                ? "scale-105 border-sky-600 bg-sky-600 text-white shadow-lg"
                : "border-slate-200 bg-white text-slate-800 hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50"
            }
          `}
        >
          <p
            className={`text-xs font-semibold uppercase tracking-wide ${
              slotIndex === index
                ? "text-sky-100"
                : "text-slate-500"
            }`}
          >
            {dayOfWeek[item[0].datetime.getDay()].slice(0, 3)}
          </p>

          <p className="mt-2 text-3xl font-bold">
            {item[0].datetime.getDate()}
          </p>
        </div>
      ))}
    </div>
  {/* Time */}
  <div className="mt-10">
    <div className="mb-4 flex items-center gap-2">
      <FaClock className="text-sky-500" />
      <h3 className="font-semibold text-slate-700">
        Available Times
      </h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {docSlots[slotIndex]?.map((item, index) => (
        <button
          key={index}
          onClick={() => setSlotTime(item.time)}
          className={`
            min-w-23.75
            rounded-full
            border
            px-4
            py-2.5
            text-sm
            font-semibold
            transition-all
            duration-300
            ${
              slotTime === item.time
                ? "border-sky-600 bg-sky-600 text-white shadow-md"
                : "border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-400 hover:bg-sky-50"
            }
          `}
        >
          {item.time.toLowerCase()}
        </button>
      ))}
    </div>
  </div>
    {/* Summary */}
    <div className="mt-10 rounded-3xl border border-sky-100 bg-sky-50 p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">
            Selected Appointment
          </h3>
          <p className="mt-1 text-slate-500">
            Review your appointment details before confirming.
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
              <FaCalendarAlt className="text-sky-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">
                Appointment Date
              </p>
              <p className="font-semibold text-slate-800">
                {docSlots[slotIndex]?.[0]
                  ? `${dayOfWeek[
                      docSlots[slotIndex][0].datetime.getDay()
                    ]}, ${docSlots[slotIndex][0].datetime.getDate()}`
                  : "Select a date"}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
              <FaClock className="text-sky-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">
                Appointment Time
              </p>
              <p className="font-semibold text-slate-800">
                {slotTime || "Select a time"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
      disabled={!slotTime}
      className={`
        flex items-center gap-3
        rounded-full
        px-8
        py-3.5
        font-semibold
        transition-all
        duration-300
        ${
          slotTime
            ? "bg-sky-600 text-white shadow-lg hover:bg-sky-700 hover:shadow-xl hover:scale-105"
            : "cursor-not-allowed bg-slate-300 text-slate-500"
        }
      `}
    >
      Confirm Appointment →
    </button>
      </div>
    </div>
</div>
    {/* Listing Related Doctors */}
    <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;