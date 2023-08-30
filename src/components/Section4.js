import { FaArrowRight } from "react-icons/fa";
import { FaSolarPanel } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

export default function Section4() {
  return (
    <div>
      <div className="w-[88%] mx-auto py-20">
        <h1 className="text-green-500 text-center text-lg font-semibold">
          Our Services
        </h1>
        <p className="text-black text-center text-4xl font-bold mb-10">
          We Are Pioneers In The World Of <br /> Renewable Energy
        </p>
        <div className="">
          <div className="grid grid-cols-1 gap-5 mb-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border rounded-lg relative">
              <div className="" style={{ height: "270px" }}>
                <img
                  className="w-full h-full object-fit rounded-t-lg"
                  src="/images/solar.jpg"
                  alt="img1"
                />
              </div>
              <div className="flex justify-center items-center absolute left-6 bottom-40 hover:text-white hover:bg-green-500 text-6xl bg-white rounded-full w-24 h-24 text-green-500">
                <div>
                  <FaSolarPanel />
                </div>
              </div>
              <div className="p-6 pt-14 bg-slate-50">
                <h2 className="text-2xl font-bold mb-3">Solar Panels</h2>
                <p className="text-slate-500 mb-3">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a
                  className="text-green-500 flex justify-normal items-center"
                  href="#">
                  Read More{" "}
                  <div className="pl-2 pt-0.5 text-sm">
                    <FaArrowRight className="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="border rounded-lg relative">
              <div className="" style={{ height: "270px" }}>
                <img
                  className="w-full h-full object-fit rounded-t-lg"
                  src="/images/mills.jpg"
                  alt="img1"
                />
              </div>
              <div className="flex justify-center hover:text-white hover:bg-green-500 items-center absolute left-6 bottom-40 text-5xl bg-white rounded-full w-24 h-24 text-green-500">
                <div>
                  <FaWind />
                </div>
              </div>
              <div className="p-6 pt-14 bg-slate-50">
                <h2 className="text-2xl font-bold mb-3">Wind Turbines</h2>
                <p className="text-slate-500 mb-3">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a
                  className="text-green-500 flex justify-normal items-center"
                  href="#">
                  Read More{" "}
                  <div className="pl-2 pt-0.5 text-sm">
                    <FaArrowRight className="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="border rounded-lg relative">
              <div className="" style={{ height: "270px" }}>
                <img
                  className="w-full h-full object-fit rounded-t-lg"
                  src="/images/panels.jpg"
                  alt="img1"
                />
              </div>
              <div className="flex justify-center hover:text-white hover:bg-green-500 items-center absolute left-6 bottom-40 text-5xl bg-white rounded-full w-24 h-24 text-green-500">
                <div>
                  <FaLightbulb />
                </div>
              </div>
              <div className="p-6 pt-14 bg-slate-50">
                <h2 className="text-2xl font-bold mb-3">Hydropower Plants</h2>
                <p className="text-slate-500 mb-3">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a
                  className="text-green-500 flex justify-normal items-center"
                  href="#">
                  Read More{" "}
                  <div className="pl-2 pt-0.5 text-sm">
                    <FaArrowRight className="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="border rounded-lg relative">
              <div className="" style={{ height: "270px" }}>
                <img
                  className="w-full h-full object-fit rounded-t-lg"
                  src="/images/silicon.jpg"
                  alt="img1"
                />
              </div>
              <div className="flex justify-center hover:text-white hover:bg-green-500 items-center absolute left-6 bottom-40 text-6xl bg-white rounded-full w-24 h-24 text-green-500">
                <div>
                  <FaSolarPanel />
                </div>
              </div>
              <div className="p-6 pt-14 bg-slate-50">
                <h2 className="text-2xl font-bold mb-3">Solar Panels</h2>
                <p className="text-slate-500 mb-3">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a
                  className="text-green-500 flex justify-normal items-center"
                  href="#">
                  Read More{" "}
                  <div className="pl-2 pt-0.5 text-sm">
                    <FaArrowRight className="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="border rounded-lg relative">
              <div className="" style={{ height: "270px" }}>
                <img
                  className="w-full h-full object-fit rounded-t-lg"
                  src="/images/roof.jpg"
                  alt="img1"
                />
              </div>
              <div className="flex justify-center hover:text-white hover:bg-green-500 items-center absolute left-6 bottom-40 text-5xl bg-white rounded-full w-24 h-24 text-green-500">
                <div>
                  <FaWind />
                </div>
              </div>
              <div className="p-6 pt-14 bg-slate-50">
                <h2 className="text-2xl font-bold mb-3">Wind Turbines</h2>
                <p className="text-slate-500 mb-3">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a
                  className="text-green-500 flex justify-normal items-center"
                  href="#">
                  Read More{" "}
                  <div className="pl-2 pt-0.5 text-sm">
                    <FaArrowRight className="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="border rounded-lg relative">
              <div className="" style={{ height: "270px" }}>
                <img
                  className="w-full h-full object-fit rounded-t-lg"
                  src="/images/power-plant.jpg"
                  alt="img1"
                />
              </div>
              <div className="flex hover:text-white hover:bg-green-500 justify-center items-center absolute left-6 bottom-40 text-5xl bg-white rounded-full w-24 h-24 text-green-500">
                <div>
                  <FaLightbulb />
                </div>
              </div>
              <div className="p-6 pt-14 bg-slate-50">
                <h2 className="text-2xl font-bold mb-3">Hydropower Plants</h2>
                <p className="text-slate-500 mb-3">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a
                  className="text-green-500 flex justify-normal items-center"
                  href="#">
                  Read More{" "}
                  <div className="pl-2 pt-0.5 text-sm">
                    <FaArrowRight className="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
