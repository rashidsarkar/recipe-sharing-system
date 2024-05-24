import { Link } from "react-router-dom";

function Navbar() {
  const links = (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link> */}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/recipes">Recipes</Link>
      </li>
    </>
  );
  return (
    <>
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
          <ul className="px-1 menu menu-horizontal">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Sign in</a>
          {/* <a className="btn">Sign out</a> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
