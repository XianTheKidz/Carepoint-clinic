import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {assets} from "../assets/assets"

const Login = () => {
  const [state, setState] = useState("Login");
  
  const navigate = useNavigate();

  const { setToken } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
  event.preventDefault();

  // Save user information
  const user = {
    name: state === "Sign Up" ? name : localStorage.getItem("userName") || "",
    email,
  };

  localStorage.setItem("userName", user.name);
  localStorage.setItem("userEmail", user.email);

  // Save login state
  localStorage.setItem("token", "true");
  setToken("true");

  navigate("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-5">
      <form
      onSubmit={onSubmitHandler}
      className="w-full max-w-5xl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="
        relative
        flex
        overflow-hidden
        rounded-4xl
        bg-white
        shadow-2xl
        min-h-162.5
      ">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute right-5 top-5 z-20 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X size={22} />
        </button>
      {/* Left Side */}
      <div className="hidden lg:flex w-[55%] relative bg-sky-600">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-200 w-full object-cover"
        >
          <source src={assets.loginVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-sky-900/50"></div>
        <div className="relative z-10 flex flex-col justify-center px-10 text-white">
          <h2 className="text-4xl font-bold">
            Your Health,
            <br />
            Our Priority
          </h2>
          <p className="mt-6 text-lg text-sky-100">
            Book appointments with trusted doctors anytime.
          </p>
          <div className="mt-10 space-y-3">
            <p>● Trusted Doctors</p>
            <p>● Easy Appointment Booking</p>
            <p>● Secure Medical Records</p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full lg:w-[45%] p-10">
      {/* Header */}
        <div className="mb-6">
          <span className="rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-600">
            CarePoint
          </span>

          <h1 className="mt-4 text-2xl font-bold text-slate-800">
            {state === "Sign Up"
              ? "Create Account"
              : "Welcome Back"}
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {state === "Sign Up"
              ? "Create your CarePoint account to book appointments with trusted healthcare professionals."
              : "Login to manage your appointments and healthcare records."}
          </p>
        </div>

        {/* Full Name */}
        {state === "Sign Up" && (
          <div className="mb-4">
            <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
              <FaUser className="text-sky-500" />
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="
                w-full
                rounded-xl
                border
                border-sky-100
                bg-slate-50
                px-4
                py-2.5
                outline-none
                transition
                focus:border-sky-500
                focus:bg-white
              "
            />
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
            <FaEnvelope className="text-sky-500" />
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full
              rounded-xl
              border
              border-sky-100
              bg-slate-50
              px-4
              py-2.5
              outline-none
              transition
              focus:border-sky-500
              focus:bg-white
            "
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
            <FaLock className="text-sky-500" />
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              w-full
              rounded-xl
              border
              border-sky-100
              bg-slate-50
              px-4
              py-2.5
              outline-none
              transition
              focus:border-sky-500
              focus:bg-white
            "
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            mt-6
            w-full
            rounded-xl
            bg-sky-600
            py-2.5
            font-semibold
            text-white
            shadow-md
            transition-all
            duration-300
            hover:bg-sky-700
            hover:shadow-lg
          "
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Switch */}
        <p className="mt-5 text-center text-sm text-slate-500">
          {state === "Sign Up"
            ? "Already have an account?"
            : "Don't have an account?"}

          <span
            onClick={() =>
              setState(
                state === "Sign Up"
                  ? "Login"
                  : "Sign Up"
              )
            }
            className="ml-1 cursor-pointer font-semibold text-sky-600 hover:text-sky-700"
          >
            {state === "Sign Up"
              ? "Login"
              : "Create one"}
          </span>
        </p>
      </div>
      </motion.div>
    </form>
    </div>
  );
};

export default Login;