import React, { useEffect, useState } from "react";
import UserIcon from "../../assets/icons/UserIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import TVIcon from "../../assets/icons/TVIcon";
import WishOutlineIcon from "../../assets/icons/WishOutlineIcon";
import { Link, useLocation } from "react-router-dom";

function BottomBar() {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);
  const bottomNavigations = [
    {
      label: (
        <div className="flex flex-col items-center gap-1">
          <div className="w-7 h-7 flex justify-center items-center">
            <HomeIcon color={activeNav === "/" ? "red" : "white"} />
          </div>
          <div className="text-xs sm:text-base">Home</div>
        </div>
      ),
      value: "/",
    },
    {
      label: (
        <div className="flex flex-col items-center gap-1">
          <div className="w-7 h-7 flex justify-center items-center">
            <TVIcon color={activeNav === "/movies" ? "red" : "white"} />
          </div>
          <div className="text-xs sm:text-base">Movies</div>
        </div>
      ),
      value: "/movies",
    },
    {
      label: (
        <div className="flex flex-col items-center gap-1">
          <div className="w-7 h-7 flex justify-center items-center">
            <WishOutlineIcon
              color={activeNav === "/wishlist" ? "red" : "white"}
            />
          </div>
          <div className="text-xs sm:text-base">Wishlist</div>
        </div>
      ),
      value: "/wishlist",
    },
    {
      label: (
        <div className="flex flex-col items-center gap-1">
          <div className="w-7 h-7 flex justify-center items-center">
            <UserIcon color={activeNav === "/profile" ? "red" : "white"} />
          </div>
          <div className="text-xs sm:text-base">Profile</div>
        </div>
      ),
      value: "/profile",
    },
  ];

  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-50 desktop:hidden bg-dark-10 rounded-tl-2xl rounded-tr-2xl"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <ul className="flex justify-around px-5 pt-3 pb-2">
        {bottomNavigations.map((bottomNavigation, i) => (
          <li
            onClick={() => setActiveNav(bottomNavigation.value)}
            className={
              activeNav === bottomNavigation.value
                ? "text-primary-45"
                : "text-white"
            }
            key={i}
          >
            <Link to={bottomNavigation.value}>{bottomNavigation.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BottomBar;
