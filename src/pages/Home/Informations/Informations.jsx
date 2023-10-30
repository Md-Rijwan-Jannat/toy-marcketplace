import { Link } from "react-router-dom";
import "./Informations.css";

import Aos from "aos";
import { useEffect } from "react";
import { Title } from "../../../components/hooks/container/Title/Title";

export const Informations = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Title title={"Location"} />
      <section className="dark:bg-gray-800 dark:text-gray-100 font-body">
        <div className="container w-full flex flex-col md:flex-row justify-center justify-content-center gap-10 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className=" rounded w-full md:w-1/2 h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116856.6001463155!2d90.2311916433594!3d23.755624300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8acb9e6935d%3A0x7f16caf76bce229d!2sToys%20Plus!5e0!3m2!1sen!2sbd!4v1698595929375!5m2!1sen!2sbd"
              className="rounded-md w-full h-[400px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center p-6 text-center rounded-sm w-full md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold sm:text-6xl">Toy Land</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              123 Main Street, Demo City, Bangladesh. Please note that this is a
              fictional
              <br className="hidden md:inline lg:hidden" /> location created for
              demonstration purposes and does not represent an actual toy shop
              in Bangladesh.
            </p>
            <div className="flex items-center justify-between gap-5 flex-col md:flex-row">
              {/* Mac App Store Button */}
              <div className="flex mt-3 w-60 h-14 bg-black text-white rounded-xl items-center justify-center">
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="30">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-2xl font-semibold font-sans -mt-1">
                    Mac App Store
                  </div>
                </div>
              </div>

              {/* Google Play Button */}
              <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    />
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    />
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    />
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold font-sans -mt-1">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-between my-5">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-rose-500 hover:bg-rose-500 focus:bg-rose-500"
              >
                Location
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-rose-500 hover:bg-rose-500 focus:bg-rose-500"
              >
                Contacts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
