import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const defaultUser = { userLoc: { locationName: "Delhi", lat: 28.6520, lng: 77.2410 } };
    const [user, setUser] = useState(() => {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : defaultUser;
    });

const updateUser = (newUser) => {
    try {
    localStorage.setItem("user", JSON.stringify(newUser)); 
    setUser(newUser);
    } catch (e) {
    console.log(e);
    }
};

return (
    <UserContext.Provider value={{ updateUser, user }}>
    {children}
    </UserContext.Provider>
);
};

UserProvider.propTypes = {
children: PropTypes.node.isRequired,
};
