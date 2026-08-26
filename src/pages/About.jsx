import {assets} from '../assets/assets'
import {
  FaBolt,
  FaUserMd,
  FaLock,
} from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="text-center pt-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
        About CarePoint
      </p>
      <h1 className="mt-2 text-4xl font-bold text-slate-800">
        Modern Healthcare, Simplified
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-slate-500">
        CarePoint is a modern clinic appointment platform designed to simplify
        healthcare for both patients and medical professionals. We provide an
        easy, secure, and efficient way to book appointments, manage schedules,
        and improve the overall healthcare experience.
      </p>
    </div>
  <div className="mx-auto mt-16 flex w-full max-w-7xl flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:gap-14 lg:px-12">
  <img
    src={assets.about_image}
    alt=""
    className="w-full max-w-sm rounded-2xl shadow-xl lg:max-w-md"
  />
  <div className="w-full flex-1 space-y-6 lg:pr-6">
    <h2 className="text-3xl font-bold text-slate-800">
      Who We Are
    </h2>
    <p className="text-justify leading-8 text-slate-600">
      CarePoint was created to improve the way small clinics manage appointments, 
      patient information, and doctor schedules. Many clinics still depend on 
      traditional paper-based systems or simple spreadsheets, which can be slow, 
      difficult to manage, and prone to errors. Patients may need to visit or call 
      the clinic to make an appointment, while clinic staff have to handle bookings manually. 
      This can lead to double bookings, data loss, increased administrative workload, and longer waiting times for patients.
    </p>
    <p className="text-justify leading-8 text-slate-600">
    Our goal is to provide a simple and convenient digital solution 
    that makes healthcare appointment management more efficient. Through 
    CarePoint, patients can search for doctors, view available schedules, and 
    book appointments online without needing to visit the clinic or make a phone 
    call. Doctors can manage their schedules and appointments, while administrators can 
    manage doctors, schedules, users, and other system data from one centralized platform.
    </p>
    <p className="text-justify leading-8 text-slate-600">
    CarePoint is designed to reduce manual work, minimize booking errors, and help prevent 
    double bookings through structured scheduling. By bringing appointment and clinic management 
    into one centralized system, the platform helps improve communication between patients and healthcare 
    providers while creating a more organized and convenient experience for everyone.
    </p>
    <p className="text-justify leading-8 text-slate-600">
    <b>Our vision</b> is to make clinic appointment management easier, faster, 
    and more accessible through technology. CarePoint focuses on providing a 
    responsive and user-friendly system that supports patients, doctors, and 
    clinic administrators in their daily activities.
    </p>
  </div>
</div>
    
    <div className="relative mt-24 overflow-hidden rounded-2xl h-130">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={assets.mission_video} type="video/mp4" />
      </video>

      {/* Mission Card */}
      <div
        className="
          absolute
          left-10
          bottom-10
          max-w-2xl
          rounded-2xl
          bg-white/90
          p-12
          shadow-2xl
          backdrop-blur-md
        "
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
          Our Mission
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-800">
          Making Healthcare Accessible for Everyone
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Our mission is to transform the way clinics manage appointments by
          providing a secure, reliable, and user-friendly digital platform that
          connects patients with healthcare professionals. We strive to improve
          efficiency, reduce waiting times, and deliver a better healthcare
          experience for every patient.
        </p>
      </div>
    </div>
    
      <div className="mt-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
        Why Choose Us
      </p>
      <h2 className="mt-3 text-4xl font-bold text-slate-800">
        Why Patients Trust CarePoint
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
        We make healthcare simpler, more convenient, and more accessible by
        connecting patients with trusted doctors and making appointment
        management easier.
      </p>
    </div>
    <div className="mt-14 mb-28 grid gap-8 md:grid-cols-3">

      {/* Fast Booking */}
      <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800">
          Fast Booking
          <FaBolt className="text-sky-500" />
        </h3>
        <p className="mt-4 leading-7 text-slate-500">
          Schedule your appointments in just a few clicks. CarePoint makes it
          easy to find available doctors and book your visit without waiting
          on phone calls or dealing with paperwork.
        </p>
      </div>

      {/* Qualified Doctors */}
      <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800">
          Qualified Doctors
          <FaUserMd className="text-sky-500" />
        </h3>
        <p className="mt-4 leading-7 text-slate-500">
          Connect with experienced healthcare professionals across multiple
          medical specialties and find the right doctor for your healthcare
          needs with greater confidence.
        </p>
      </div>

      {/* Secure Records */}
      <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800">
          Secure Records
          <FaLock className="text-sky-500" />
        </h3>
        <p className="mt-4 leading-7 text-slate-500">
          Your appointment and personal information are securely managed,
          helping you access your healthcare details conveniently whenever
          you need them.
        </p>
      </div>
    </div>
  </div>
  )
}

export default About