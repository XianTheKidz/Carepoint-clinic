import { assets } from "../assets/assets";

import {
  FaBolt,
  FaUserMd,
  FaLock,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full overflow-hidden px-4 sm:px-6 lg:px-8">

      {/* =========================
          INTRO
      ========================== */}
      <div className="mx-auto max-w-4xl pt-10 text-center sm:pt-14">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 sm:text-sm">
          About CarePoint
        </p>

        <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
          Modern Healthcare, Simplified
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
          CarePoint is a modern clinic appointment platform designed to
          simplify healthcare for both patients and medical professionals.
          We provide an easy, secure, and efficient way to book appointments,
          manage schedules, and improve the overall healthcare experience.
        </p>
      </div>


      {/* =========================
          WHO WE ARE
      ========================== */}
      <div
        className="
          mx-auto
          mt-12
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          gap-10
          sm:mt-16
          sm:gap-12
          lg:flex-row
          lg:gap-14
          lg:px-4
        "
      >

        {/* Image */}
        <img
          src={assets.about_image}
          alt="CarePoint healthcare team"
          className="
            w-full
            max-w-sm
            rounded-2xl
            shadow-xl
            sm:max-w-md
            lg:max-w-md
          "
        />

        {/* Content */}
        <div className="w-full flex-1 space-y-6 lg:pr-6">

          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            Who We Are
          </h2>

          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            CarePoint was created to improve the way small clinics manage
            appointments, patient information, and doctor schedules. Many
            clinics still depend on traditional paper-based systems or simple
            spreadsheets, which can be slow, difficult to manage, and prone to
            errors. Patients may need to visit or call the clinic to make an
            appointment, while clinic staff have to handle bookings manually.
            This can lead to double bookings, data loss, increased
            administrative workload, and longer waiting times for patients.
          </p>

          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Our goal is to provide a simple and convenient digital solution
            that makes healthcare appointment management more efficient.
            Through CarePoint, patients can search for doctors, view available
            schedules, and book appointments online without needing to visit
            the clinic or make a phone call. Doctors can manage their schedules
            and appointments, while administrators can manage doctors,
            schedules, users, and other system data from one centralized
            platform.
          </p>

          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            CarePoint is designed to reduce manual work, minimize booking
            errors, and help prevent double bookings through structured
            scheduling. By bringing appointment and clinic management into one
            centralized system, the platform helps improve communication
            between patients and healthcare providers while creating a more
            organized and convenient experience for everyone.
          </p>

          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            <b>Our vision</b> is to make clinic appointment management easier,
            faster, and more accessible through technology. CarePoint focuses
            on providing a responsive and user-friendly system that supports
            patients, doctors, and clinic administrators in their daily
            activities.
          </p>

        </div>
      </div>


      {/* =========================
          OUR MISSION
      ========================== */}
      <div
        className="
          relative
          mx-auto
          mt-16
          h-130
          w-full
          max-w-7xl
          overflow-hidden
          rounded-2xl
          sm:mt-20
          sm:h-140
          lg:h-130
        "
      >

        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src={assets.mission_video}
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/20"></div>

        {/* Mission Card */}
        <div
          className="
            absolute
            bottom-5
            left-4
            right-4
            rounded-2xl
            bg-white/90
            p-6
            shadow-2xl
            backdrop-blur-md
            sm:bottom-8
            sm:left-8
            sm:right-auto
            sm:max-w-xl
            sm:p-8
            lg:bottom-10
            lg:left-10
            lg:max-w-2xl
            lg:p-12
          "
        >

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 sm:text-sm">
            Our Mission
          </p>

          <h2
            className="
              mt-3
              text-2xl
              font-bold
              leading-tight
              text-slate-800
              sm:mt-4
              sm:text-3xl
              lg:text-4xl
            "
          >
            Making Healthcare Accessible for Everyone
          </h2>

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-slate-600
              sm:mt-5
              sm:text-base
              sm:leading-8
              lg:mt-6
              lg:text-lg
            "
          >
            Our mission is to transform the way clinics manage appointments by
            providing a secure, reliable, and user-friendly digital platform
            that connects patients with healthcare professionals. We strive to
            improve efficiency, reduce waiting times, and deliver a better
            healthcare experience for every patient.
          </p>

        </div>
      </div>


      {/* =========================
          WHY CHOOSE US
      ========================== */}
      <div className="mx-auto mt-16 max-w-4xl text-center sm:mt-20">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 sm:text-sm">
          Why Choose Us
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-800 sm:mt-3 sm:text-4xl">
          Why Patients Trust CarePoint
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:mt-5 sm:text-base">
          We make healthcare simpler, more convenient, and more accessible by
          connecting patients with trusted doctors and making appointment
          management easier.
        </p>

      </div>


      {/* =========================
          FEATURES
      ========================== */}
      <div
        className="
          mx-auto
          mt-10
          mb-20
          grid
          max-w-7xl
          gap-5
          sm:mt-12
          sm:gap-8
          md:grid-cols-3
          lg:mb-28
        "
      >

        {/* Fast Booking */}
        <div
          className="
            rounded-3xl
            border
            border-sky-100
            bg-white
            p-6
            shadow-sm
            transition
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
            sm:p-8
          "
        >
          <h3 className="flex items-center justify-between text-lg font-bold text-slate-800 sm:text-xl">
            <span>Fast Booking</span>
            <FaBolt className="text-sky-500" />
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Schedule your appointments in just a few clicks. CarePoint makes it
            easy to find available doctors and book your visit without waiting
            on phone calls or dealing with paperwork.
          </p>
        </div>


        {/* Qualified Doctors */}
        <div
          className="
            rounded-3xl
            border
            border-sky-100
            bg-white
            p-6
            shadow-sm
            transition
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
            sm:p-8
          "
        >
          <h3 className="flex items-center justify-between text-lg font-bold text-slate-800 sm:text-xl">
            <span>Qualified Doctors</span>
            <FaUserMd className="text-sky-500" />
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Connect with experienced healthcare professionals across multiple
            medical specialties and find the right doctor for your healthcare
            needs with greater confidence.
          </p>
        </div>


        {/* Secure Records */}
        <div
          className="
            rounded-3xl
            border
            border-sky-100
            bg-white
            p-6
            shadow-sm
            transition
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
            sm:p-8
          "
        >
          <h3 className="flex items-center justify-between text-lg font-bold text-slate-800 sm:text-xl">
            <span>Secure Records</span>
            <FaLock className="text-sky-500" />
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Your appointment and personal information are securely managed,
            helping you access your healthcare details conveniently whenever
            you need them.
          </p>
        </div>

      </div>

    </div>
  );
};

export default About;