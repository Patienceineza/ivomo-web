import React from "react";
import { Link } from "react-router-dom";

function Help() {
  return (
    <main className="flex e=">
      <div className="mx-auto">
        <div className="">
          <ul className="flex space-x-2 rtl:space-x-reverse">
            <li>
              <Link to="/" className="text-primary hover:underline">
                Dashboard
              </Link>
            </li>
            <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
              <span>Notifications</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-3 my-3  dark:bg-slate-900 rounded shadow  text-gray-500 ">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae nemo quasi eveniet error est laborum quo saepe eos
              perferendis dolores iusto quam delectus sunt, nesciunt quisquam,
              debitis sint blanditiis ea!
            </p>
          </div>
          <form>
            <div className="grid grid-cols-2 gap-2 ">
              <div className="flex flex-col my-5 ">
                <label htmlFor="firstname"> First Name</label>
                <input
                  type="text"
                  className=" form-input block w-full  focus:outline-primary p-3 pl-5 text-sm border border-[#4BC2C2] rounded-md mt-2 dark:text-gray-400"
                  placeholder="Write here"
                />
              </div>
              <div className="flex flex-col my-5 ">
                <label htmlFor="Lastname"> Last Name</label>
                <input
                  type="text"
                  className=" form-input block w-full focus:outline-primary p-3 pl-5 text-sm border border-[#4BC2C2] rounded-md mt-2 dark:text-gray-400"
                  placeholder="Write here"
                />
              </div>
              <div className="flex flex-col my-5 ">
                <label htmlFor="Phonenumber"> Phone number</label>
                <input
                  type="text"
                  className="  form-input block w-full focus:outline-primary p-3 pl-5 text-sm border border-[#4BC2C2] rounded-md mt-2 dark:text-gray-400"
                  placeholder="Write here"
                />
              </div>
              <div className="flex flex-col my-5 ">
                <label htmlFor="emial"> Email</label>
                <input
                  type="text"
                  className="  form-input block w-full focus:outline-primary p-3 pl-5 text-sm border border-[#4BC2C2] rounded-md mt-2 dark:text-gray-400"
                  placeholder="Write here"
                />
              </div>
            </div>

            <div className="flex flex-col w-full my-5 ">
              <label htmlFor="Message"> Message</label>
              <textarea
                className="  form-input block  h-[100px] w-full focus:outline-primary p-3 pl-5 text-sm border border-[#4BC2C2] rounded-md mt-2 dark:text-gray-400"
                placeholder="Write here"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Help;
