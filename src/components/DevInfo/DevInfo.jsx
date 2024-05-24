import React from "react";
import SectionHeading from "../../TextEffectComponents/SectionHeading/SectionHeading";

function DevInfo() {
  return (
    <div className="p-6 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-md bg-base-200">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
            Md Rashid Sarkar
          </h2>
          <p className="mt-2 text-gray-600">Gazipur, Dhaka</p>
          {/* <p className="mt-2 text-gray-600">rashidrock1234@gmail.com</p>
          <p className="mt-2 text-gray-600">+8801872970928</p> */}

          <table className="w-full mt-6 text-left">
            <tbody>
              <tr>
                <th className="px-4 py-2 text-gray-700 border-b-2 border-gray-300">
                  Education
                </th>
                <td className="px-4 py-2 border-b-2 border-gray-300">
                  Currently in 4th year of BBA, Accounting
                </td>
              </tr>
              <tr>
                <th className="px-4 py-2 text-gray-700 border-b-2 border-gray-300">
                  Location
                </th>
                <td className="px-4 py-2 border-b-2 border-gray-300">
                  Gazipur
                </td>
              </tr>
              <tr>
                <th className="px-4 py-2 text-gray-700 border-b-2 border-gray-300">
                  Email
                </th>
                <td className="px-4 py-2 border-b-2 border-gray-300">
                  rashidrock1234@gmail.com
                </td>
              </tr>
              <tr>
                <th className="px-4 py-2 text-gray-700 border-b-2 border-gray-300">
                  Phone
                </th>
                <td className="px-4 py-2 border-b-2 border-gray-300">
                  +8801872970928
                </td>
              </tr>
              <tr>
                <th className="px-4 py-2 text-gray-700 border-b-2 border-gray-300">
                  Experience
                </th>
                <td className="px-4 py-2 border-b-2 border-gray-300">
                  1 year of teaching experience during 1st year of BBA
                </td>
              </tr>
              <tr>
                <th className="px-4 py-2 text-gray-700 border-b-2 border-gray-300">
                  Passion
                </th>
                <td className="px-4 py-2 border-b-2 border-gray-300">
                  Passionate about web development
                </td>
              </tr>
              <tr>
                <th className="px-4 py-2 text-gray-700 border-b-2 border-gray-300">
                  Technologies
                </th>
                <td className="px-4 py-2 border-b-2 border-gray-300">
                  <ul className="list-disc list-inside">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>TanStack Query</li>
                    <li>React Router DOM</li>
                    <li>Tailwind CSS</li>
                    <li>Axios</li>
                    <li>MongoDB</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th className="px-4 py-2 text-gray-700 border-b-2 border-gray-300">
                  Familiar With
                </th>
                <td className="px-4 py-2 border-b-2 border-gray-300">
                  <ul className="list-disc list-inside">
                    <li>Mongoose</li>
                    <li>Next.js</li>
                    <li>Material UI</li>
                    <li>UI Animation</li>
                    <li>Redux</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DevInfo;
