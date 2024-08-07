import React from "react";

function Footer() {
  return (
    <>
      <footer className="container p-20 border-t-[1px] border-line mx-auto">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 py-3 mb-8 items-start border-b-[1px] border-line">
            <img
              className="font-bold w-36 py-2 items-center justify-center "
              src="home/logo.png"
            />
            <div className="flex flex-row space-x-4 self-stretch">
              <button className="flex bg-primary hover:bg-primaryDarkest font-semibold text-white px-4 py-2 w-1/3 items-center justify-center rounded-[6px]">
                Buy now
              </button>
              <button className="bg-white hover:bg-primaryLightest text-primaryDarkest font-semibold border-[1px] border-primaryLight   px-4 py-2 w-1/3 items-center justify-center rounded-[6px]">
                Sell Your Car
              </button>
              <button className="bg-primaryLightest hover:bg-primary hover:text-white text-primaryDarker font-semibold border-[1px] border-primaryLight  px-4 py-2 w-1/3 items-center justify-center rounded-[6px]">
                Import now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Features</h2>
              <ul>
                <li className="mb-2">
                  Finance options{" "}
                  <span className="text-blue-500 font-bold">Free</span>
                </li>
                <li className="mb-2">Biddex inspection</li>
                <li className="mb-2">Order your dream car</li>
                <li>Compare cars</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Services</h2>
              <ul>
                <li className="mb-2">Live auctions</li>
                <li className="mb-2">Upcoming auctions</li>
                <li className="mb-2">Buy now</li>
                <li>Import vehicle</li>
                <li>Sell Your Car</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Company</h2>
              <ul>
                <li className="mb-2">About us</li>
                <li className="mb-2">Terms and conditions</li>
                <li className="mb-2">Privacy</li>
                <li className="mb-2">How it works</li>
                <li>Contact us</li>
                <li>Frequently Asked Questions</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Contact us</h2>
              <ul>
                <li className="mb-2">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.504 1.05l-2.252 1.126a2 2 0 01-2.944 0L3.948 8.217a1 1 0 01-.504-.964l1.498-4.493A1 1 0 017.28 3h3.28a2 2 0 012 2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 7a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.504 1.05l-2.252 1.126a2 2 0 01-2.944 0L15.948 8.217a1 1 0 01-.504-.964l1.498-4.493A1 1 0 0121.28 3h3.28a2 2 0 012 2z"
                      />
                    </svg>
                    <span className="ml-2">19225</span>
                  </span>
                </li>
                <li className="mb-2">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="ml-2">Support@Biddex.com</span>
                  </span>
                </li>
                <li>
                  <span className="flex space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.75 18.5H5.25m9.5 0V10.5m-9.5 0V18.5m14.5-8.5H5.25m9.5 0V10.5m-9.5 0V18.5m14.5-8.5V10.5m-14.5 0V18.5m14.5-8.5H5.25m9.5 0V10.5m-9.5 0V18.5"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7.943a11.94 11.94 0 01-2.185 6.348c-4.249 1.857-8.898 2.916-13.95 2.916H5.536c-.825-1.652-2.09-2.915-3.655-2.915a9.921 9.921 0 01-2.185-6.348C3.732 7.943 7.523 5 12 5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 21a9 9 0 110-18 9 9 0 010 18zm-3.606-9.667a1.119 1.119 0 011.553 0L12 12.001l3.857-3.856a1.119 1.119 0 011.553 1.553l-4.474 4.473-4.474-4.473a1.119 1.119 0 01-1.553-1.553z"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center mb-8">
            <h2 className="text-xl font-bold mb-4">Get the app</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-block"
              >
                <img
                  src="https://www.apple.com/newsroom/images/apps-store/appstore_download_black-lg.png"
                  alt="Download on the App Store"
                  className="h-8"
                />
              </a>
              <a
                href="#"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-block"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-8"
                />
              </a>
            </div>
          </div>

          <p className="text-gray-600 text-center mb-4">
            © 2024 biddex. all rights reserved.
          </p>
          <p className="text-gray-600 text-center">
            The Trademark BIDDEX is owner by Euro Tech.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
