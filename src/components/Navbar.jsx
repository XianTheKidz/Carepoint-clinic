import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Mobile menu state
  const [showMenu, setShowMenu] = useState(false);

  const { token, setToken } = useContext(AppContext);

  const navLinkClass = ({ isActive }) =>
    `
      py-2
      text-[15px]
      font-semibold
      tracking-wide
      transition-all
      duration-300
      ${
        isActive
          ? "text-sky-600"
          : "text-slate-700 hover:text-sky-600"
      }
    `;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    setShowMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav
        className="
          mx-auto
          flex
          h-19
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ================= LOGO ================= */}
        <img
          src={assets.logo}
          alt="CarePoint"
          onClick={() => navigate("/")}
          className="
            w-36
            cursor-pointer
            transition-transform
            duration-300
            hover:scale-105
            sm:w-40
          "
        />

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            HOME
          </NavLink>

          <NavLink to="/doctors" className={navLinkClass}>
            ALL DOCTORS
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            ABOUT
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            CONTACT
          </NavLink>
        </ul>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-4">
          {token ? (
            /* ================= PROFILE ================= */
            <div className="relative hidden cursor-pointer items-center gap-2 md:flex">
              <div className="group flex items-center gap-2">
                <img
                  src={assets.profile_pic}
                  alt="Profile"
                  className="
                    h-10
                    w-10
                    rounded-full
                    border-2
                    border-sky-100
                    object-cover
                    shadow-sm
                  "
                />

                <img
                  src={assets.dropdown_icon}
                  alt=""
                  className="
                    w-3
                    transition-transform
                    duration-300
                    group-hover:rotate-180
                  "
                />

                {/* Dropdown */}
                <div
                  className="
                    invisible
                    absolute
                    right-0
                    top-[calc(100%+16px)]
                    z-50
                    origin-top-right
                    scale-95
                    opacity-0
                    transition-all
                    duration-200
                    group-hover:visible
                    group-hover:scale-100
                    group-hover:opacity-100
                  "
                >
                  {/* Small arrow */}
                  <div
                    className="
                      absolute
                      right-5
                      -top-2
                      h-4
                      w-4
                      rotate-45
                      border-l
                      border-t
                      border-sky-100
                      bg-white
                    "
                  ></div>

                  <div
                    className="
                      w-56
                      overflow-hidden
                      rounded-2xl
                      border
                      border-sky-100
                      bg-white
                      shadow-2xl
                    "
                  >
                    {/* My Profile */}
                    <p
                      onClick={() => navigate("/my-profile")}
                      className="
                        cursor-pointer
                        px-5
                        py-3
                        text-slate-700
                        transition
                        hover:bg-sky-50
                        hover:text-sky-600
                      "
                    >
                      My Profile
                    </p>

                    {/* My Appointments */}
                    <p
                      onClick={() => navigate("/my-appointments")}
                      className="
                        cursor-pointer
                        px-5
                        py-3
                        text-slate-700
                        transition
                        hover:bg-sky-50
                        hover:text-sky-600
                      "
                    >
                      My Appointments
                    </p>

                    {/* Logout */}
                    <p
                      onClick={handleLogout}
                      className="
                        cursor-pointer
                        px-5
                        py-3
                        text-red-500
                        transition
                        hover:bg-red-50
                      "
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ================= CREATE ACCOUNT ================= */
            <button
              onClick={() => navigate("/login")}
              className="
                hidden
                rounded-xl
                border
                border-sky-500
                bg-sky-500
                px-6
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-sky-700
                hover:bg-sky-700
                hover:shadow-md
                md:block
              "
            >
              Create Account
            </button>
          )}

          {/* ================= MOBILE MENU BUTTON ================= */}
          <img
            onClick={() => setShowMenu(true)}
            className="
              block
              w-6
              cursor-pointer
              md:hidden
            "
            src={assets.menu_icon}
            alt="Open menu"
          />

          {/* ================= MOBILE MENU ================= */}
          <div
            className={`
              fixed
              right-0
              top-0
              z-100
              h-screen
              overflow-hidden
              bg-white
              shadow-2xl
              transition-all
              duration-300
              md:hidden
              ${
                showMenu
                  ? "w-full opacity-100"
                  : "pointer-events-none w-0 opacity-0"
              }
            `}
          >
            {/* Mobile Header */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-sky-100
                px-5
                py-5
              "
            >
              <img
                className="w-36"
                src={assets.logo}
                alt="CarePoint"
                onClick={() => {
                  navigate("/");
                  setShowMenu(false);
                }}
              />

              <img
                className="w-7 cursor-pointer"
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                alt="Close menu"
              />
            </div>

            {/* Mobile Navigation */}
            <ul className="mt-8 flex flex-col px-6">
              <NavLink
                onClick={() => setShowMenu(false)}
                to="/"
                className={({ isActive }) =>
                  `
                    rounded-xl
                    px-5
                    py-3
                    text-base
                    font-semibold
                    transition
                    ${
                      isActive
                        ? "bg-sky-50 text-sky-600"
                        : "text-slate-700 hover:bg-sky-50 hover:text-sky-600"
                    }
                  `
                }
              >
                HOME
              </NavLink>

              <NavLink
                onClick={() => setShowMenu(false)}
                to="/doctors"
                className={({ isActive }) =>
                  `
                    rounded-xl
                    px-5
                    py-3
                    text-base
                    font-semibold
                    transition
                    ${
                      isActive
                        ? "bg-sky-50 text-sky-600"
                        : "text-slate-700 hover:bg-sky-50 hover:text-sky-600"
                    }
                  `
                }
              >
                ALL DOCTORS
              </NavLink>

              <NavLink
                onClick={() => setShowMenu(false)}
                to="/about"
                className={({ isActive }) =>
                  `
                    rounded-xl
                    px-5
                    py-3
                    text-base
                    font-semibold
                    transition
                    ${
                      isActive
                        ? "bg-sky-50 text-sky-600"
                        : "text-slate-700 hover:bg-sky-50 hover:text-sky-600"
                    }
                  `
                }
              >
                ABOUT
              </NavLink>

              <NavLink
                onClick={() => setShowMenu(false)}
                to="/contact"
                className={({ isActive }) =>
                  `
                    rounded-xl
                    px-5
                    py-3
                    text-base
                    font-semibold
                    transition
                    ${
                      isActive
                        ? "bg-sky-50 text-sky-600"
                        : "text-slate-700 hover:bg-sky-50 hover:text-sky-600"
                    }
                  `
                }
              >
                CONTACT
              </NavLink>

              {/* Mobile Profile Links */}
              {token && (
                <>
                  <div className="my-4 h-px bg-sky-100"></div>

                  <button
                    onClick={() => {
                      navigate("/my-profile");
                      setShowMenu(false);
                    }}
                    className="
                      rounded-xl
                      px-5
                      py-3
                      text-left
                      font-semibold
                      text-slate-700
                      transition
                      hover:bg-sky-50
                      hover:text-sky-600
                    "
                  >
                    My Profile
                  </button>

                  <button
                    onClick={() => {
                      navigate("/my-appointments");
                      setShowMenu(false);
                    }}
                    className="
                      rounded-xl
                      px-5
                      py-3
                      text-left
                      font-semibold
                      text-slate-700
                      transition
                      hover:bg-sky-50
                      hover:text-sky-600
                    "
                  >
                    My Appointments
                  </button>

                  <button
                    onClick={handleLogout}
                    className="
                      rounded-xl
                      px-5
                      py-3
                      text-left
                      font-semibold
                      text-red-500
                      transition
                      hover:bg-red-50
                    "
                  >
                    Logout
                  </button>
                </>
              )}

              {/* Mobile Create Account */}
              {!token && (
                <button
                  onClick={() => {
                    navigate("/login");
                    setShowMenu(false);
                  }}
                  className="
                    mt-5
                    rounded-xl
                    bg-sky-500
                    px-5
                    py-3
                    font-semibold
                    text-white
                    shadow-sm
                    transition
                    hover:bg-sky-600
                  "
                >
                  Create Account
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Bottom Medical Blue Line */}
      <div className="h-0.5 w-full bg-sky-300"></div>
    </header>
  );
};

export default Navbar;