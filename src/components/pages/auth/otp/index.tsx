import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { setPageTitle, toggleRTL } from "../../../../core/redux/store/themeConfigSlice";
import Logo from "../../../../assets/images/lo.png";
import { useAppDispatch, useAppSelector } from "../../../../core/redux/store/types";

const OTPPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPageTitle("OTP Page"));
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
  const numberOfInputs = 4; // Change this to the number of OTP digits you want
  const [otp, setOtp] = useState<string[]>(new Array(numberOfInputs).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number
  ) => {
      const value = e.target.value;
      if (!isNaN(Number(value)) && value.length <= 1) {
          const newOtp = [...otp];
          newOtp[index] = value;
          setOtp(newOtp);

          // Move to the next input box
          if (value && index < numberOfInputs - 1) {
              inputRefs.current[index + 1].focus();
          }
      }
  };

  const handleKeyDown = (
      e: React.KeyboardEvent<HTMLInputElement>,
      index: number
  ) => {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
          inputRefs.current[index - 1].focus();
      }
  };

  return (
    <div>
      <div className="relative min-h-screen items-center bg-gray-200 flex flex-row justify-center i px-6 py-10 dark:bg-[#060818] sm:px-16">
        <div className="relative w-full max-w-[500px] rounded-md p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
          <div className="relative flex flex-col justify-center  items-center rounded-md bg-white/60 dark:bg-black/50 px-6 shadow-lg lg:min-h-[500px] py-20">
            <div className="mx-auto w-full max-w-sm">
              <div className="flex flex-row justify-center items-center w-full my-10">
                <img src={Logo} alt="logo" className="w-[90px]" />
              </div>
              <div className="mb-10">
                <h1 className="text-lg uppercase font-extrabold !leading-snug text-primary md:text-xl">
                 Verfication
                </h1>
              </div>
              <form className="space-y-5 dark:text-white">
                <div className="">
                  <label htmlFor="OTP">Verification code </label>
                  <div className="flex justify-between">
								{otp.map((digit, index) => (
									<input
										key={index}
										ref={(el) =>
											(inputRefs.current[index] = el as HTMLInputElement)
										}
										type="text"
										value={digit}
										onChange={(e) => handleChange(e, index)}
										onKeyDown={(e) => handleKeyDown(e, index)}
										maxLength={1}
                                        className="dark:bg-gray-700 border focus:outline-primary text-center rounded-lg px-3 border-[#4BC2C2] py-3 mt-1 mb-5 text-lg w-[70px]"
									/>
								))}
							</div>
                </div>
                <button
                  type="submit"
                  className="bg-primary p-2 text-white text-md font-semibold rounded !mt-6 w-full border-0 uppercase hover:bg-opacity-75"
                  onClick={() => {
                 
                    navigate("/login"); 
                  }}
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
