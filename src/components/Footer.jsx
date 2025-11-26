import { Link, NavLink } from "react-router-dom";
import PlayStoreImage from '../assets/images/PlayStore.png'
import AppStoreImage from '../assets/images/AppStore.png'
import rupe from '../assets/images/payment.png'
import visa from '../assets/images/visa.png'
import paytm from '../assets/images/paytm.png'
import phonepe from '../assets/images/payment.png'
import paypal from '../assets/images/paypal.png'
import gpay from '../assets/images/google-pay.png'
import { FaTwitter, FaPinterest, FaSnapchatGhost, FaApple, FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="" className="bg-linear-to-r from-[#644a32] to-[#72513e] text-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Logo */}
        <h1 className="text-3xl text-amber-100 font-semibold mb-8">
          Aura Footer
        </h1>

        {/* Footer Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* CUSTOMER SERVICE */}
          <div>
            <h2 className="text-amber-100 text-lg font-semibold mb-4">
              CUSTOMER SERVICE
            </h2>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Return Order</li>
              <li>Cancel Order</li>
            </ul>
            <div className="mt-4 space-y-2 text-sm">
              <p>15 Days Return Policy</p>
              <p>Cash On Delivery*</p>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h2 className="text-amber-100 text-lg font-semibold mb-4">
              COMPANY
            </h2>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>We are Hiring</li>
            </ul>

            <h2 className="text-amber-100 text-lg font-semibold mt-6 mb-4">
              DOWNLOAD THE APP
            </h2>
            <div className="space-y-2 flex w-25 gap-2">
              <img src={PlayStoreImage} alt="Play Store" className="h-6" />
              <img src={AppStoreImage} alt="Apple Store" className=" h-6" />
            </div>
          </div>

          {/* CONNECT WITH US */}
          <div>
            <h2 className="text-amber-100 text-lg font-semibold mb-4">
              CONNECT WITH US
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <FaFacebookSquare className="h-5 w-5 text-white " />
                <span>4.7M People like this</span>
              </li>

              <li className="flex items-center space-x-2">
                <FaInstagram className="h-5 w-5 text-white" />
                <span>1M People follow this</span>
              </li>
            </ul>

            <ul className="flex space-x-4 mt-4">
              <li><FaTwitter className="text-white h-5 w-5" /></li>
              <li><FaPinterest className="text-white h-5 w-5" /></li>
              <li><FaSnapchatGhost className="text-white h-5 w-5" /></li>
              <li><FaApple className="text-white h-5 w-5" /></li>
            </ul>
            <h2 className="text-amber-100 text-lg font-semibold mt-6 mb-4">
              100% SECURE PAYMENT
            </h2>
            <div className="flex gap-1">
              <img src={phonepe} alt="Card" className="w-10 h-8  bg-amber-50 " />
              <img src={gpay} alt="Card" className="w-10 h-8 bg-amber-50 p-1  " />
              <img src={rupe} alt="Card" className="w-10 h-8 bg-amber-50 p-1 " />
              <img src={paypal} alt="Card" className="w-10 h-8 bg-amber-50 p-1 " />
              <img src={paytm} alt="Card" className="w-10 h-8 bg-amber-50 p-1" />
              <img src={visa} alt="Card" className="w-10 h-8 bg-amber-50  " />

            </div>
          </div>

          {/* SUBSCRIBE*/}
          <div className="">
            <h2 className="text-amber-100 text-lg font-semibold mb-4 ">
              KEEP UP TO DATE
            </h2>

            <div className="flex items-center border border-white rounded-2xl overflow-hidden w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter email"
                className="text-black py-2 px-3 w-35 outline-none text-sm flex-1"
              />
              <button className="sticky bg-[#442a15] text-white px-4 py-2 text-xs sm:text-sm hover:opacity-75 whitespace-nowrap flex-1">
                SUBSCRIBE
              </button>
            </div>


          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-xs text-orange-200 mt-10 opacity-70">
        © {new Date().getFullYear()} Aura — All Rights Reserved
      </p>
    </footer>
  );
}
