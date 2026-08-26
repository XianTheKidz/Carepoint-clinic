import { useState } from "react";
import { AppContext } from "./AppContext";
import { doctors } from "../assets/assets";

const AppContextProvider = ({ children }) => {
  const currencySymbol = "$";

  // Login state
  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  // User profile data
  const [userData, setUserData] = useState(() => {
    const savedUser = localStorage.getItem("userData");

    if (savedUser) {
      return JSON.parse(savedUser);
    }

    return {
      name: "",
      image: "",
      email: "",
      phone: "",
      address: {
        line1: "",
        line2: "",
      },
      gender: "",
      dob: "",
    };
  });

  const value = {
    doctors,
    currencySymbol,

    token,
    setToken,

    userData,
    setUserData,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;