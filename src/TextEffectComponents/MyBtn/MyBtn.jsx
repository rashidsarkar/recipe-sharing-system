import { Link } from "react-router-dom";

function MyBtn({ children }) {
  return (
    <Link className="inline-block  rounded   bg-[#DDF2FD] px-6 pb-2 pt-2.5 text-xs  uppercase leading-normal text-[#1b313d] shadow-md transition duration-150 ease-in-out hover:bg-[#9BBEC8] hover:shadow-lg focus:bg-[#9BBEC8]focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#9BBEC8] font-bold active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-md">
      {children}
    </Link>
  );
}

export default MyBtn;
