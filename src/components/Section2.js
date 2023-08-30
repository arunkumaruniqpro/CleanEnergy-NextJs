import { FaUsers } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";
import { CgAwards } from "react-icons/cg";
import { FaPeopleCarry } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Section2() {
  const [milestoneData, setMilestoneData] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:1337/api/milestone").then((response) => {
      console.log(response.data.data);
      setMilestoneData(response.data.data);
    });
  }, []);

  return (
    <div className="w-[88%] mx-auto bg-white text-black p-4 py-16">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-y-4 md:gap-y-6 lg:gap-y-0">
          <div className="mb-6 sm:mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="bg-green-600 w-12 h-12 flex justify-center items-center rounded-full text-white text-2xl">
                <FaUsers />
              </div>
              <h1 className="text left ml-2 text-4xl font-bold">
                {milestoneData?.attributes.happyCustomers}
              </h1>
            </div>
            <h2 id="customers" className="text-left text-lg font-bold mt-5">
              Happy Customers
            </h2>
            <p className="text-left mt-4 text-gray-400">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
            </p>
          </div>
          <div className="mb-6 sm:mb-4 md:mb-0 md:ml-3 lg:ml-0">
            <div className="flex items-center">
              <div className="bg-green-600 w-12 h-12 flex justify-center items-center rounded-full text-white text-2xl">
                <HiCheck />
              </div>
              <h1 className="text left ml-2 text-4xl font-bold">
                {milestoneData?.attributes.projectDone}
              </h1>
            </div>
            <h2 className="text-left text-lg font-bold mt-5">Project Done</h2>
            <p className="text-left mt-4 text-gray-400">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
            </p>
          </div>
          <div className="mb-6 sm:mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="bg-green-600 w-12 h-12 flex justify-center items-center rounded-full text-white text-2xl">
                <CgAwards />
              </div>
              <h1 className="text left ml-2 text-4xl font-bold">
                {milestoneData?.attributes.awardsWon}
              </h1>
            </div>
            <h2 className="text-left text-lg font-bold mt-5 ">Awards Won</h2>
            <p className="text-left mt-4 text-gray-400">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
            </p>
          </div>
          <div className="md:ml-3 lg:ml-0">
            <div className="flex items-center">
              <div className="bg-green-600 w-12 h-12 flex justify-center items-center rounded-full text-white text-2xl">
                <FaPeopleCarry />
              </div>
              <h1 className="text left ml-2 text-4xl font-bold">
                {milestoneData?.attributes.expertWorkers}
              </h1>
            </div>
            <h2 className="text-left text-lg font-bold mt-5">Expert Workers</h2>
            <p className="text-left mt-4 text-gray-400">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
