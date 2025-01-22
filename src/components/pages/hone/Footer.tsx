import React from "react";
import IconFacebook from "../../Icon/IconFacebook";
import IconTwitter from "../../Icon/IconTwitter";
import IconInstagram from "../../Icon/IconInstagram";
import IconLinkedin from "../../Icon/IconLinkedin";


function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full  px-4  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mb-8">
        
          <div>
            <h3 className="text-xl font-semibold mb-4">IVOMO</h3>
            <p className="text-gray-400">
              This is where you can find hstory books Updates of Rwanda
            </p>
            <p className="text-gray-400 mt-4">some stret 113 , Kigali Rwanda</p>
            <p className="text-gray-400">Email: contact@company.com</p>
            <p className="text-gray-400">Phone: +250 78-456-7890</p>
          </div>

        

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <IconFacebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <IconTwitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <IconInstagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <IconLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="">
            <h3 className="text-xl font-semibold mb-4">Find Us</h3>
            <iframe
            title="Kigali Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8983932045634!2d30.05940931514269!3d-1.9572503991299854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d1c7271ecafdd7%3A0x754c7b56488cfed8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2suk!4v1612784675634!5m2!1sen!2suk"
            width="100%"
            height="300"
            className="border-0"
            loading="lazy"
          ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-4 text-center">
          <p className="text-gray-500">&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
