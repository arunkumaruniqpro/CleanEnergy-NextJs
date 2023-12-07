import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="container sticky top-0 z-10 border-b-2 border-gray-200">
      {/* //desktop nav */}
      <nav className="bg-white hidden lg:block">
        <div className="mx-auto w-[100%]">
          <div className="flex items-center justify-between h-20">
            <div>
              <span className="text-[#005b96] font-bold text-3xl pl-8">
                <Link href="/">Beulah</Link>
              </span>
            </div>
            <div className="flex items-center">
              <div className="ml-10 mr-5 text-lg">
                <Link
                  href="/"
                  className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                  HOME
                </Link>
                <Link
                  href="/"
                  className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                  ABOUT
                </Link>
                <Link
                  href="/"
                  className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                  SERVICE
                </Link>
                <Link
                  href="/"
                  className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                  PROJECT
                </Link>
                <Link
                  href="/"
                  className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                  PAGES
                </Link>
                <Link
                  href="/"
                  className="text-black hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                  CONTACT
                </Link>
              </div>

              <div className="text-lg">
                <button className="btn btn-primary rounded-0 hover:text-black bg-blue-500 h-20 px-6 flex justify-center items-center text-white">
                  <Link href="/" className="mr-3">
                    Get A Quote
                  </Link>
                  <FaArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile */}
      <nav className="bg-white lg:hidden flex">
        <div className="mx-auto w-[88%]">
          <div className="flex items-center justify-between h-20">
            <div>
              <span className="text-[#32C36C] font-bold text-3xl pl-8">
                <Link href="/">Beulah</Link>
              </span>
            </div>
          </div>
        </div>
        <button id="hamburger-menu" className="text-2xl pr-5 md:pr-10">
          <RxHamburgerMenu />
        </button>
      </nav>
    </div>
  );
}
