import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaVenusMars,
  FaBirthdayCake,
  FaPen,
  FaSave,
} from "react-icons/fa";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    
  name: localStorage.getItem("userName") || "",
  image: assets.profile_pic,
  email: localStorage.getItem("userEmail") || "",
  phone: "",
  address: {
    line1: "",
    line2: "",
  },
  gender: "",
  dob: "",
  });

  useEffect(() => {
  const savedProfile = localStorage.getItem("carepointUser");

  if (savedProfile) {
    setUserData(JSON.parse(savedProfile));
  }
}, []);

  const [isEdit, setIsEdit] = useState(false);
  const fileInputRef = useRef(null);

  const handleProfileChange = (event) => {
  const file = event.target.files[0];

  if (!file) return;

  const imageUrl = URL.createObjectURL(file);

  setUserData((prev) => ({
    ...prev,
    image: imageUrl,
  }));
};

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">

      {/* Main Profile Card */}
      <div className="mx-auto max-w-3xl rounded-3xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">

        {/* Profile Header */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-6">

          {/* Profile Image */}
          <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="group relative block"
          >
            <img
              className="
                h-32
                w-32
                rounded-2xl
                border-4
                border-sky-50
                object-cover
                shadow-sm
                transition-all
                duration-300
                group-hover:brightness-90
              "
              src={userData.image}
              alt={userData.name}
            />

            {/* Change Photo Overlay */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                rounded-2xl
                bg-slate-900/40
                opacity-0
                transition-all
                duration-300
                group-hover:opacity-100
              "
            >
              <FaPen className="text-lg text-white" />
            </div>
          </button>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleProfileChange}
            className="hidden"
          />

          <div className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white shadow-md">
            <FaUser className="text-sm" />
          </div>

        </div>

          {/* Name */}
          <div className="mt-5 flex-1 text-center sm:mt-2 sm:text-left">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              CarePoint Patient
            </p>

            {isEdit ? (
              <input
                className="
                  mt-2
                  w-full
                  max-w-sm
                  rounded-xl
                  border
                  border-sky-200
                  bg-sky-50/50
                  px-4
                  py-2.5
                  text-2xl
                  font-semibold
                  text-slate-800
                  outline-none
                  transition
                  focus:border-sky-500
                  focus:ring-2
                  focus:ring-sky-100
                "
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            ) : (
              <h1 className="mt-2 text-3xl font-bold text-slate-800">
                {userData.name}
              </h1>
            )}

            <p className="mt-2 text-sm text-slate-500">
              Manage your personal information and contact details.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-sky-100" />

        {/* Contact Information */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
              <FaEnvelope />
            </div>

            <div>
              <h2 className="font-bold text-slate-800">
                Contact Information
              </h2>
              <p className="text-xs text-slate-500">
                Your contact details
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {/* Email */}
            <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <FaEnvelope className="text-sky-500" />
                Email
              </div>

              <p className="mt-2 break-all text-sm text-slate-700">
                {userData.email}
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <FaPhone className="text-sky-500" />
                Phone
              </div>

              {isEdit ? (
                <input
                  className="
                    mt-2
                    w-full
                    rounded-lg
                    border
                    border-sky-200
                    bg-white
                    px-3
                    py-2
                    text-sm
                    text-slate-700
                    outline-none
                    focus:border-sky-500
                    focus:ring-2
                    focus:ring-sky-100
                  "
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                />
              ) : (
                <p className="mt-2 text-sm text-slate-700">
                  {userData.phone || "Not provided"}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-4 sm:col-span-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <FaMapMarkerAlt className="text-sky-500" />
                Address
              </div>

              {isEdit ? (
                <div className="mt-3 space-y-2">
                  <input
                    className="
                      w-full
                      rounded-lg
                      border
                      border-sky-200
                      bg-white
                      px-3
                      py-2
                      text-sm
                      text-slate-700
                      outline-none
                      focus:border-sky-500
                      focus:ring-2
                      focus:ring-sky-100
                    "
                    type="text"
                    placeholder="Example: 123 Main Street"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: {
                          ...prev.address,
                          line1: e.target.value,
                        },
                      }))
                    }
                  />

                  <input
                    className="
                      w-full
                      rounded-lg
                      border
                      border-sky-200
                      bg-white
                      px-3
                      py-2
                      text-sm
                      text-slate-700
                      outline-none
                      focus:border-sky-500
                      focus:ring-2
                      focus:ring-sky-100
                    "
                    type="text"
                    placeholder="Example: London, United Kingdom"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: {
                          ...prev.address,
                          line2: e.target.value,
                        },
                      }))
                    }
                  />
                </div>
              ) : (
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {userData.address.line1 || "Not provided"}
                  <br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="mt-8">

          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
              <FaUser />
            </div>

            <div>
              <h2 className="font-bold text-slate-800">
                Basic Information
              </h2>
              <p className="text-xs text-slate-500">
                Your personal information
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {/* Gender */}
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <FaVenusMars className="text-sky-500" />
                Gender
              </div>

              {isEdit ? (
                <select
                  className="
                    mt-2
                    w-full
                    rounded-lg
                    border
                    border-sky-200
                    bg-white
                    px-3
                    py-2
                    text-sm
                    text-slate-700
                    outline-none
                    focus:border-sky-500
                    focus:ring-2
                    focus:ring-sky-100
                  "
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      gender: e.target.value,
                    }))
                  }
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className="mt-2 text-sm text-slate-700">
                  {userData.gender || "Not provided"}
                </p>
              )}
            </div>

            {/* Birthday */}
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <FaBirthdayCake className="text-sky-500" />
                Birthday
              </div>

              {isEdit ? (
                <input
                  className="
                    mt-2
                    w-full
                    rounded-lg
                    border
                    border-sky-200
                    bg-white
                    px-3
                    py-2
                    text-sm
                    text-slate-700
                    outline-none
                    focus:border-sky-500
                    focus:ring-2
                    focus:ring-sky-100
                  "
                  type="date"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      dob: e.target.value,
                    }))
                  }
                />
              ) : (
                <p className="mt-2 text-sm text-slate-700">
                  {userData.dob || "Not provided"}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex justify-center sm:justify-start">
        {isEdit ? (
          <button
            type="button"
            onClick={() => {
              localStorage.setItem(
                "carepointUser",
                JSON.stringify(userData)
              );

              setIsEdit(false);
            }}
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-sky-500
              px-7
              py-3
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:bg-sky-600
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            <FaSave />
            Save Information
          </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsEdit(true)}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-sky-500
                bg-white
                px-7
                py-3
                font-semibold
                text-sky-600
                transition-all
                duration-300
                hover:bg-sky-500
                hover:text-white
                hover:-translate-y-0.5
                hover:shadow-md
              "
            >
              <FaPen />
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;