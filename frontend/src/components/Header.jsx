import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Logout clicked");
    dispatch(logout());
  };

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white shadow-sm">
      <div className="flex items-center">
        <img
          className="h-8 w-auto mr-2"
          src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_1280.png"
          alt="logo"
        />
        <h1 className="text-xl font-bold">
          YouTube<sup className="text-xs">IN</sup>
        </h1>
      </div>

      <div className="flex items-center flex-1 max-w-2xl mx-8">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            className="w-full px-4 py-2 pl-10 border rounded-full focus:outline-none focus:border-blue-500"
            placeholder="Search"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 text-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center">
        {auth.name ? (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                {auth.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium">{auth.name}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-6 py-2 text-sm text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
