import { HiCheck } from "react-icons/hi";
import { MdPeople } from "react-icons/md";
import { FaDraftingCompass } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export default function Section5() {
  return (
    <div className="">
      <div className="container lg:mx-0 bg-slate-100 ">
        <div className="w-[88%] lg:w-full mx-auto">
          <div className="sm:block lg:flex">
            <div className="w-full lg:w-1/2 text-black p-12 py-20 pr-12 lg:pl-28">
              <div>
                <h1 className="text-lg text-green-600 font-bold">
                  Why Chose Us!
                </h1>
              </div>
              <p className="text-xl md:text-4xl  font-bold">
                Complete Commercial & Residential Solar Systems
              </p>
              <p className="mt-6 text-slate-500">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet
              </p>
              <div className="md:flex justify-between pr-36 ">
                <div>
                  <div className="flex items-center mt-6 ">
                    <div className="bg-green-600 mr-4 w-12 h-12 flex justify-center items-center rounded-full text-white text-lg">
                      <HiCheck />
                    </div>
                    <div>
                      <div className="text-slate-500">Quality</div>
                      <div className="text-black font-semibold text-lg">
                        Services
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-6 ">
                    <div className="bg-green-600 mr-4 w-12 h-12 flex justify-center items-center rounded-full text-white text-lg">
                      <FaDraftingCompass />
                    </div>
                    <div>
                      <div className="text-slate-500">Free</div>
                      <div className="text-black font-semibold text-lg">
                        Consultation
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mt-6 ">
                    <div className="bg-green-600 mr-4 w-12 h-12 flex justify-center items-center rounded-full text-white text-xl">
                      <MdPeople />
                    </div>
                    <div>
                      <div className="text-slate-500">Expert</div>
                      <div className="text-black font-semibold text-lg">
                        Workers
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-6 ">
                    <div className="bg-green-600 mr-4 w-12 h-12 flex justify-center items-center rounded-full text-white text-xl">
                      <BiSupport />
                    </div>
                    <div>
                      <div className="text-slate-500">Customer</div>
                      <div className="text-black font-semibold text-lg">
                        Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2" style={{ height: "520px" }}>
              <img
                className="w-full h-[100%] object-cover"
                src="/images/plants.jpg"
                alt="img1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
