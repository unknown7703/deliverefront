import titlelogo from "../assets/deliveretitle.svg";
import Button from "./Button";
import { useState, useContext, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { UserContext } from "../store/UserContext";

function Navbar() {
  const { user, updateUser } = useContext(UserContext);
  const [userLoc, setUserLoc] = useState(null);
  const [isLocDropdownOpen, setIsLocDropdownOpen] = useState(false);

  
  useEffect(() => {
    if (user?.userLoc) {
      setUserLoc(user.userLoc); 
    }
  }, [user]);

  const locationList = [
    { locationName: "Delhi", lat: 28.6520, lng: 77.2410 },
    { locationName: "Mumbai", lat: 19.076, lng: 72.8777 },
    { locationName: "Bangalore", lat: 12.9716, lng: 77.5946 },
  ];

  const toggleLocDropdown = () => {
    setIsLocDropdownOpen(!isLocDropdownOpen);
  };

  const handleLocationChange = (location) => {
    setUserLoc(location);
    updateUser({ ...user, userLoc: location }); 
    setIsLocDropdownOpen(false);
  };

  const handleGithubLink = (event) => {
    event.preventDefault();
    window.open("https://github.com/unknown7703/deliverefront", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full h-16 flex flex-row justify-between items-center font-semibold px-32 border-b-2 bg-black relative">
      <div>
        <img src={titlelogo} alt="mainlogo" className="w-20" />
      </div>
      <div className="flex flex-row ">
        <div className="relative">
          <Button type="transparent" onClick={toggleLocDropdown}>
            <BsGlobe className="mr-1.5 mt-1 align-middle text-l" />
            {userLoc?.locationName || "Select Location"}
            <RiArrowDropDownLine className="ml-1 text-2xl align-middle" />
          </Button>
          {isLocDropdownOpen && (
            <div className="absolute bg-white text-black font-normal rounded-lg shadow-lg mt-4 w-40 z-10">
              {locationList.map((location) => (
                <div
                  key={location.locationName}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLocationChange(location)}
                >
                  {location.locationName}
                </div>
              ))}
            </div>
          )}
        </div>
        <Button type="transparent">
          <CiShoppingCart className="text-xl align-middle mr-2" /> Cart
        </Button>
        <Button type="transparent">
          <IoIosAddCircleOutline className="text-xl align-middle mr-2" />
          Add Stores
        </Button>
        <Button type="solid-invert" onClick={handleGithubLink}>
          <FaGithub className="text-xl align-middle mr-2" />
          Github
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
