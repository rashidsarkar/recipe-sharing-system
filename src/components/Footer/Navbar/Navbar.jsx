import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Firebase/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import axiosInstancePublic from "../../../AxiosApi/axiosInstancePublic";
import useCoinData from "../../../RecipesApi/useCoinData";
import CustomLoading from "../../CustomLoading/CustomLoading";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import useAxiosInstanceSecure from "../../../AxiosApi/useAxiosInstanceSecure";

function Navbar() {
  const { googleSing, user, logOut } = useContext(AuthContext);
  const { axiosInstanceSecure } = useAxiosInstanceSecure();
  const navigate = useNavigate();
  const preveLocation = useLocation();
  const [userDataPosted, setUserDataPosted] = useState(false);
  const { coinData, isLoading, isError, error } = useCoinData();

  useEffect(() => {
    if (user && !userDataPosted) {
      axiosInstanceSecure
        .post("/api/userData", {
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
          coin: 50,
          incomeCoin: 0,
        })
        .then(() => {
          setUserDataPosted(true);
        })
        .catch((error) => {
          console.error("Error posting user data:", error);
        });
    }
  }, [axiosInstanceSecure, user, userDataPosted]);

  const handleGoogleSignIn = () => {
    googleSing()
      .then(() => {
        Swal("Success", "Login successful!", "success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSingOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-[#021327]"
              : isActive
              ? "text-[#05445E] font-semibold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/recipes"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-[#021327]"
              : isActive
              ? "text-[#05445E] font-semibold"
              : ""
          }
        >
          Recipes
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/addRecipes"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending text-[#021327]"
                : isActive
                ? "text-[#05445E] font-semibold"
                : ""
            }
          >
            Add Recipes
          </NavLink>
        </li>
      )}
    </>
  );

  if (isLoading) return <CustomLoading />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl max-w-40 btn btn-ghost">
          <img
            className="w-fit"
            src="https://i.ibb.co/zGtjgNn/d51d210f-b5a4-4dbd-881b-c82d60ac8169-removebg-preview.png"
            alt=""
          />
        </a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="inline-flex flex-row flex-wrap p-2 px-1 space-x-4 text-xl font-semibold menuu menuu-horizontal">
          {links}
        </ul>
      </div>
      <div className="justify-end navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              className="cursor-pointer tooltip tooltip-left"
              data-tip={user.displayName}
            >
              <div tabIndex={0} className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL || "photoURL"} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 w-[250px] z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box"
            >
              <li>
                <div className="flex flex-col px-4 py-3">
                  <span className="block text-sm text-[#503CA1] dark:text-white">
                    {user.displayName || "Display Name"}
                  </span>
                  <span className="block text-sm text-[#503CA1] truncate dark:text-gray-400">
                    Coins: {coinData?.coin || 0}
                  </span>
                </div>
              </li>
              <li className="mx-auto text-center text-[#503CA1]">
                <Link onClick={handleSingOut}>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <ul className="inline-flex flex-row flex-wrap gap-3 p-2 px-1 text-xl text-white menuu menuu-horizontal">
            <li>
              <NavLink
                onClick={handleGoogleSignIn}
                className="rounded bg-[#DDF2FD] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[#427D9D] shadow-md transition duration-150 ease-in-out hover:bg-[#9BBEC8] hover:shadow-lg focus:bg-[#9BBEC8] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#9BBEC8] active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-md flex items-center justify-center"
              >
                <FaGoogle className="inline-block mr-2" /> Login
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
