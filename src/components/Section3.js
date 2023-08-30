import { HiCheck } from "react-icons/hi";

export default function Section3() {
  return (
    <div className="container lg:mx-0 bg-slate-50">
      <div className="w-[88%] lg:w-full mx-auto">
        <div className="sm:block lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="" style={{ height: "627px" }}>
              <img
                className="w-full h-full object-cover"
                src="/images/img2.jpg"
                alt="img1"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-black p-12 py-20 pr-12 lg:pr-36">
            <div>
              <h1 className="text-lg text-green-600 font-bold">About Us</h1>
            </div>
            <p className="text-xl md:text-4xl  font-bold">
              25+ Years Experience In Solar & Renewable Energy Industry
            </p>
            <p className="mt-6 text-slate-500">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo erat amet
            </p>
            <div className="flex items-center mt-6 ">
              <div className="bg-green-600 mr-4 w-4 h-4 flex justify-center items-center rounded-full text-white text-sm">
                <HiCheck />
              </div>
              <div className="text-slate-500">Diam dolor diam ipsum</div>
            </div>
            <div className="flex items-center mt-6">
              <div className="bg-green-600 mr-4 w-4 h-4 flex justify-center items-center rounded-full text-white text-sm">
                <HiCheck />
              </div>
              <div className="text-slate-500">Aliqu diam amet diam et eos</div>
            </div>
            <div className="flex items-center mt-6">
              <div className="bg-green-600 mr-4 w-4 h-4 flex justify-center items-center rounded-full text-white text-sm">
                <HiCheck />
              </div>
              <div className="text-slate-500">
                Tempor erat elitr rebum at clita
              </div>
            </div>
            <div>
              <button className="bg-green-600 px-9 py-4 rounded-full my-8 text-white font-semibold">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
