import PerfectScrollbar from "react-perfect-scrollbar";
import { Link, useLocation } from "react-router-dom";
import { toggleSidebar } from "../../../../../core/redux/store/themeConfigSlice";
import AnimateHeight from "react-animate-height";
import { useState, useEffect } from "react";
import IconCaretsDown from "../../../../Icon/IconCaretsDown";
import IconCaretDown from "../../../../Icon/IconCaretDown";

import {
  BellIcon,
  ChartBarSquareIcon,
  CircleStackIcon,
  CodeBracketIcon,
  DocumentChartBarIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../../../../../core/redux/store/types";

const Sidebar = () => {
  const [currentMenu, setCurrentMenu] = useState<string>("");
  const themeConfig = useAppSelector((state) => state.themeConfig);
  const semidark = useAppSelector(
    (state) => state.themeConfig.semidark
  );
  const location = useLocation();
  const dispatch = useAppDispatch();
  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  console.log(location.pathname);

  const navigation = [
    {
      name: "Dashboard",
      to: "/creditor",
      icon: HomeIcon,
      current: location.pathname === "/creditor",
    },
    {
      name: "Notifications",
      to: "/creditor/notifications",
      icon: BellIcon,
      current: location.pathname === "/creditor/notifications",
    },
    {
      name: "Data Upload",
      to: "/creditor/dataupload",
      icon: CircleStackIcon,
      current: location.pathname === "/creditor/dataupload",
    },
    {
      name: "Reports",
      to: "/creditor/reports",
      icon: ChartBarSquareIcon,
      current: location.pathname === "/creditor/reports",
    },
    {
      name: "Developer",
      to: "/creditor/developer",
      icon: CodeBracketIcon,
      current: location.pathname === "/creditor/developer",
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
          <div className="h-5"></div>
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
                  {ItemDropDown(currentMenu, toggleMenu, {
                    name: "Creditor Panel",
                    Icon: UsersIcon,
                    items: [{ name: "User management", to: "user" }],
                  })}
                  {ItemDropDown(currentMenu, toggleMenu, {
                    name: "Data Submission",
                    Icon: DocumentChartBarIcon,
                    items: [
                      { name: "Personal Information", to: "consumer/new" },
                      { name: "Director Reg.", to: "director/new" },
                      { name: "Bounced Cheque", to: "bounce-cheque/new" },
                      { name: "Guarantor Reg.", to: "guarantor/new" },
                      { name: "Collaterals Reg.", to: "collaterals/new" },
                      { name: "Shareholder Reg.", to: "shareholder/new" },
                      { name: "Corporate Reg.", to: "corporate/new" },
                    ],
                  })}
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

type DropDownProps = {
  items: {
    name: string;
    to: string;
  }[];
  name: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

function ItemDropDown(
  currentMenu: string,
  toggleMenu: (value: string) => void,
  item: DropDownProps
) {
  return (
    <li className="menu nav-item">
      <button
        type="button"
        className={`${
          currentMenu === item.name ? "" : ""
        } nav-link group w-full`}
        onClick={() => toggleMenu(item.name)}
      >
        <div className="flex items-center">
          <item.Icon className="group-hover:!text-primary shrink-0" />
          <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#a3a3a3] dark:group-hover:text-white-dark">
            {item.name}
          </span>
        </div>

        <div
          className={
            currentMenu !== "invoice" ? "rtl:rotate-90 -rotate-90" : ""
          }
        >
          <IconCaretDown />
        </div>
      </button>

      <AnimateHeight
        duration={300}
        height={currentMenu === item.name ? "auto" : 0}
      >
        <ul className="sub-menu text-gray-500">
          {item.items.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </AnimateHeight>
    </li>
  );
}
