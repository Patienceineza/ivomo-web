import PerfectScrollbar from "react-perfect-scrollbar";
import { Link, useLocation } from "react-router-dom";
import { toggleSidebar } from "../../../../../core/redux/store/themeConfigSlice";
import { useEffect } from "react";
import IconCaretsDown from "../../../../Icon/IconCaretsDown";

import {
  BellAlertIcon,
  ChartBarSquareIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import IconHelpCircle from "../../../../Icon/IconHelpCircle";
import { useAppDispatch, useAppSelector } from "../../../../../core/redux/store/types";

const Sidebar = () => {
  const themeConfig = useAppSelector((state) => state.themeConfig);
  const location = useLocation();
  const dispatch = useAppDispatch();

  console.log(location.pathname);

  const navigation = [
    {
      name: "Dashboard",
      to: "/consumer",
      icon: HomeIcon,
      current: location.pathname === "/consumer",
    },
    {
      name: "My credit report ",
      to: "/consumer/report",
      icon: ChartBarSquareIcon,
      current: location.pathname === "/consumer/report",
    },
    {
      name: "My notifications",
      to: "/consumer/notifications",
      icon: BellAlertIcon,
      current: location.pathname === "/consumer/notifications",
    },
    {
      name: "Help",
      to: "/consumer/help",
      icon: IconHelpCircle,
      current: location.pathname === "/consumer/help",
    },
  ];

  useEffect(() => {
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      dispatch(toggleSidebar());
    }
  }, [dispatch, location, themeConfig.sidebar]);

  return (
    <div className={"dark"}>
      <nav
        className={`sidebar capitalize fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300`}
      >
        <div className="bg-white dark:bg-black h-full">
          <div className="flex justify-between items-center px-4 py-3">
            <Link
              to="/"
              className="main-logo flex  flex-col items-center shrink-0"
            >
              <p className="text-xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">
                {" "}
                INFO<span className="text-primary">CROSS</span>
              </p>
            </Link>

            <button
              type="button"
              className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
              onClick={() => dispatch(toggleSidebar())}
            >
              <IconCaretsDown className="m-auto rotate-90" />
            </button>
          </div>
          <div className="h-10"></div>
          <PerfectScrollbar className="h-[calc(100vh)] relative">
            <ul className="relative font-semibold space-y-0.5 p-4 py-0">
              <li className="nav-item">
                <ul>
                  {navigation.map((item, index) => (
                    <li key={index} className="nav-item">
                      <Link
                        to={item.to}
                        className={`group ${
                          item.current ? "active text-primary" : " "
                        }`}
                      >
                        <div className="flex items-center">
                          <item.icon className="group-hover:!text-primary shrink-0" />
                          <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#a3a3a3] dark:group-hover:text-white-dark">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
