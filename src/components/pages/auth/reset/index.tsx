import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import IconLockDots from "../../../Icon/IconLockDots";
import { setPageTitle, toggleRTL } from "../../../../core/redux/store/themeConfigSlice";
import Logo from "../../../../assets/images/lo.png";
import { useAppDispatch, useAppSelector } from "../../../../core/redux/store/types";

const ResetPassword = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPageTitle("Login Boxed"));
  });
  const navigate = useNavigate();
  const isDark = useAppSelector(
    (state) =>
      state.themeConfig.theme === "dark" || state.themeConfig.isDarkMode
  );
  const isRtl =
    useAppSelector((state) => state.themeConfig.rtlClass) === "rtl"
      ? true
      : false;
  const themeConfig = useAppSelector((state) => state.themeConfig);
  const setLocale = (flag: string) => {
    setFlag(flag);
    if (flag.toLowerCase() === "ae") {
      dispatch(toggleRTL("rtl"));
    } else {
      dispatch(toggleRTL("ltr"));
    }
  };
  const [flag, setFlag] = useState(themeConfig.locale);


  return (
    <div>
      <div className="relative  min-h-screen items-center bg-gray-200  flex lfex-row justify-center items-centerpx-6 py-10 dark:bg-[#060818] sm:px-16">
        <div className="relative w-full max-w-[870px] rounded-md p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
          <div className="relative flex flex-col justify-center rounded-md bg-white/60  dark:bg-black/50 px-6 shadow-lg lg:min-h-[600px] py-20">
            <div className="mx-auto w-full max-w-[440px]">
              <div className="flex flex-row justify-center items-center  w-full  my-10 ">
                <img src={Logo} alt="logo" className="w-[90px] " />
              </div>
              <div className="mb-10">
                <h1 className="text-lg  uppercase font-extrabold !leading-snug text-primary md:text-xl">
                Reset Password
                </h1>
                
              </div>
              <form className="space-y-5 dark:text-white">
              <div>
                  <label htmlFor="Password">New password</label>
                  <div className="relative text-white-dark">
                    <input
                      id="Password"
                      type="password"
                      placeholder="Enter Password"
                      className="form-input ps-10 placeholder:text-white-dark"
                    
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <IconLockDots fill={true} />
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="Password">Re-enter  Password</label>
                  <div className="relative text-white-dark">
                    <input
                      id="Password"
                      type="password"
                      placeholder="Enter Password"
                      className="form-input ps-10 placeholder:text-white-dark"
                    
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <IconLockDots fill={true} />
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-primary p-2 text-white text-md font-semibold rounded !mt-6 w-full border-0 uppercase hover:bg-opacity-75"
                 
                >
                Reset Password
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
