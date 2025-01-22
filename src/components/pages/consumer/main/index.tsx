import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import { setPageTitle } from "../../../../core/redux/store/themeConfigSlice";
import { Tab } from "@headlessui/react";
import {
  BanknotesIcon,
  CpuChipIcon,
  CreditCardIcon,
  CurrencyBangladeshiIcon,
  HomeModernIcon,
  MapPinIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@mantine/core";
import GaugeChart from "react-gauge-chart";
import profile from "../../../../assets/images/Ellipse 57.png";
import { useAppDispatch, useAppSelector } from "../../../../core/redux/store/types";

export default function Consumer() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPageTitle("Dash Board"));
  });
  const isDark = useAppSelector(
    (state) =>
      state.themeConfig.theme === "dark" || state.themeConfig.isDarkMode
  );
  const isRtl =
    useAppSelector((state) => state.themeConfig.rtlClass) === "rtl"
      ? true
      : false;

  const [loading] = useState(false);

  //Revenue Chart
  const columnChart: any = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "bar",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#805dca", "#e7515a"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      grid: {
        borderColor: isDark ? "#191e3a" : "#e0e6ed",
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
        axisBorder: {
          color: isDark ? "#191e3a" : "#e0e6ed",
        },
      },
      yaxis: {
        opposite: isRtl ? true : false,
        labels: {
          offsetX: isRtl ? -10 : 0,
        },
      },
      tooltip: {
        theme: isDark ? "dark" : "light",
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
      },
    },
  };

  const areaChart: any = {
    series: [
      {
        name: "Income",
        data: [
          16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000,
          14000, 17000,
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 300,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#805dca"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
      xaxis: {
        axisBorder: {
          color: isDark ? "#191e3a" : "#e0e6ed",
        },
      },
      yaxis: {
        opposite: isRtl ? true : false,
        labels: {
          offsetX: isRtl ? -40 : 0,
        },
      },
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      legend: {
        horizontalAlign: "left",
      },
      grid: {
        borderColor: isDark ? "#191E3A" : "#E0E6ED",
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      tooltip: {
        theme: isDark ? "dark" : "light",
      },
    },
  };

  return (
    <div>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link to="/" className="text-primary hover:underline">
            Dashboard
          </Link>
        </li>
      </ul>

      <div className="pt-5 flex flex-row ">
        <div className="w-3/5">
          <CreditScore />
        </div>
        <div className=" mx-2 w-2/5">
          <Profile />
        </div>
      </div>
      <div className="pt-5">
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white">
              My loan payment{" "}
            </h5>
          </div>
          <div className="mb-5">
            <ReactApexChart
              series={areaChart.series}
              options={areaChart.options}
              className="rounded-lg bg-white dark:bg-black overflow-hidden"
              type="area"
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CreditScore() {
  const crdt = [
    {
      field: "Payment history",
      value: "35%",
    },
    {
      field: "Amount owed",
      value: "30%",
    },
    {
      field: "Length of credit history",
      value: "15%",
    },
    {
      field: "New credit",
      value: "15%",
    },
    {
      field: "Type of credit used",
      value: "15%",
    },
  ];
  return (
    <div className="pt-5  bg-white dark:bg-slate-900  shadow rounded  font-semibold   flex flex-col gap-3">
      <div className="p-3 py-4 font-semibold text-gray-400">Credit score</div>
      <div className="p-3 flex flex-col items-center justify-center md:flex-row gap-3">
        <div className="md:w-1/2 w-full">
          <GaugeChart
            id="gauge-chart2"
            nrOfLevels={30}
            percent={0.86}
            arcPadding={0}
            cornerRadius={0}
            textColor={"#ebe4f7"}
          />
        </div>
        <div className="flex w-full md:w-1/2 flex-col items-center gap-2">
          {crdt.map((item, index) => (
            <div
              key={index}
              className="p-2 flex flex-row justify-between w-full bg-gray-50 dark:bg-slate-900 rounded-md"
            >
              <p className="font-bold dark:text-gray-300">{item.field}:</p>
              <p className="font-semibold text-gray-500">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Profile() {
  const idnt = [
    {
      field: "Names",
      value: "Rurangwa S. Junior",
    },
    {
      field: "ID",
      value: "1234657678787",
    },
    {
      field: "Nationality",
      value: "Rwandan",
    },
    {
      field: "Age",
      value: "34",
    },
   
 
  ];
  return (
    <div className="bg-white  dark:bg-slate-900 rounded w-full shadow px-2 py-4  ">
      <div>
        <div className="my-4">
          <img src={profile} alt="" />
        </div>
        <div className="flex justify-start items-start gap-4 flex-wrap">
          {idnt.map((item, index) => (
            <div
              key={index}
              className="p-2 flex flex-row justify-between w-full bg-gray-50 dark:bg-slate-900 rounded-md"
            >
              <p className="font-bold dark:text-gray-300">{item.field}:</p>
              <p className="font-semibold text-gray-500">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
