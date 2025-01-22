import { Tab } from '@headlessui/react';
import { BanknotesIcon, CpuChipIcon, CreditCardIcon, CurrencyBangladeshiIcon, HomeModernIcon, MapPinIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@mantine/core';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../../../Dropdown';
import IconCaretDown from '../../../../Icon/IconCaretDown';
import GaugeChart from 'react-gauge-chart';

export default function AdminReportsSummary() {
    const tabs = [
        {
            icon: UserIcon,
            title: 'Personal',
            selected: true,
        },
        {
            icon: CreditCardIcon,
            title: 'Account Information',
            selected: true,
        },
        {
            icon: BanknotesIcon,
            title: 'Loan Details',
            selected: true,
        },
        {
            icon: BanknotesIcon,
            title: 'Loan Status',
            selected: true,
        },
        {
            icon: CpuChipIcon,
            title: 'Credit Score',
            selected: true,
        },
    ];

    const tabItems = [<PersonalInformation />, <AccountInformation />, <LoanDetails />, <LoanStatus />, <CreditScore />];
    return (
        <div className="text-gray-700 dark:grey-200">
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/admin" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/admin/reports" className="text-primary before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 hover:underline">
                        Reports
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Summary</span>
                </li>
            </ul>
            <div className="panel mt-5" id="icon">
                <div className="mb-5 flex items-center justify-between">
                    <h5 className="text-lg font-semibold dark:text-gray-300">Admin Reports</h5>
                </div>
                <div className="mb-5">
                    <Tab.Group>
                        <Tab.List className="mt-3 mr-3 flex flex-wrap border-b border-white-light dark:border-[#39437b]">
                            {tabs.map((item, index) => (
                                <Tab key={index} as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={`${
                                                selected ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#39437b] dark:!border-b-black' : 'dark:text-gray-400'
                                            }
                                    dark:hover:border-b-black' -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-primary`}
                                        >
                                            <item.icon className="ltr:mr-2 w-5 rtl:ml-2" />
                                            {item.title}
                                        </button>
                                    )}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels>
                            {tabItems.map((item, index) => (
                                <Tab.Panel key={index}>
                                    <div className="">{item}</div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    );
}

function PersonalInformation() {
    const idnt = [
        {
            field: 'Surname',
            value: 'Junior',
        },
        {
            field: 'Salutation',
            value: 'Mr',
        },
        {
            field: 'Nationality',
            value: 'Rwandan',
        },
        {
            field: 'Forname',
            value: 'Rurangwa',
        },
        {
            field: 'Forname 2',
            value: 'Rurangwa',
        },
        {
            field: 'Forname 3',
            value: 'Junior',
        },
        {
            field: 'Date of Birth',
            value: '2 December 1998',
        },
        {
            field: 'Place of Birth',
            value: 'Butare',
        },
        {
            field: 'Gender',
            value: 'Male',
        },
        {
            field: 'Marital Status',
            value: 'Single',
        },
        {
            field: 'No of Dependencies',
            value: '10',
        },
        {
            field: 'Passport Number',
            value: '2194023',
        },
        {
            field: 'Tax No',
            value: '1246543',
        },
        {
            field: 'Drivers License',
            value: '12032983343532',
        },
        {
            field: 'Health Insurance',
            value: 'RSSB',
        },
        {
            field: 'Social Security Number',
            value: 'Junior',
        },
        {
            field: 'National ID',
            value: '1998283244374',
        },
    ];
    const addr = [
        {
            field: 'Postal Address Line 1 Number',
            value: '0783232313',
        },
        {
            field: 'Postal Address Code',
            value: '03394',
        },
        {
            field: 'Postal Address Location',
            value: 'Kimironko',
        },
        {
            field: 'Physical Address Line 1',
            value: '078342562',
        },
        {
            field: 'Postal Address Province',
            value: 'West',
        },
        {
            field: 'Physical Address District',
            value: 'Butare',
        },
        {
            field: 'Physical Address Sector',
            value: 'Huye',
        },
        {
            field: 'Postal Address Cell',
            value: 'Taba',
        },
    ];
    const cont = [
        {
            field: 'Email Address',
            value: 'johndoe@gmail.com',
        },
        {
            field: 'Work Telephone',
            value: '2443349230',
        },
        {
            field: 'Mobile Telephone',
            value: '078123455',
        },
        {
            field: 'Home Telephone',
            value: '2443349230',
        },
        {
            field: 'Residence Type',
            value: 'Home',
        },
    ];
    const emp = [
        {
            field: 'Facsimile',
            value: 'juniorrurangwa@gmail.com',
        },
        {
            field: 'Employer Name',
            value: 'Cogebanque',
        },
        {
            field: 'Occupation',
            value: 'Finance Manager',
        },
        {
            field: 'Income',
            value: '800,000 RWF',
        },
        {
            field: 'Income Frequency',
            value: 'Monthly',
        },
        {
            field: 'Employer Address Line 1',
            value: '2443349230',
        },
        {
            field: 'Employer Address Line 2',
            value: '2443349230',
        },
        {
            field: 'Employer Town',
            value: 'Kigali',
        },
        {
            field: 'Employer Country',
            value: 'Rwanda',
        },
    ];
    return (
        <div className="pt-5 font-semibold flex flex-col gap-3">
            <div className="w-full py-1 flex justify-center items-center bg-gray-200 dark:bg-slate-800 dark:text-gray-300 text-black font-bold">IDENTIFICATION</div>
            <div className="py-4 flex justify-start items-start gap-3 flex-wrap">
                {idnt.map((item, index) => (
                    <div key={index} className="p-2 flex flex-row justify-between w-80 bg-gray-50 dark:bg-slate-900 rounded-md">
                        <p className="font-bold dark:text-gray-300">{item.field}:</p>
                        <p className="font-semibold text-gray-500">{item.value}</p>
                    </div>
                ))}
            </div>
            <div className="w-full py-1 flex justify-center items-center bg-gray-200 dark:bg-slate-800 dark:text-gray-300 text-black font-bold">ADDRESS INFORMATION</div>
            <div className=" font-semibold text-gray-500 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure ratione facilis ipsum vel mollitia qui. Fugiat officia libero adipisci. Consequatur labore vero neque impedit velit
                quisquam, sit perferendis molestiae.
            </div>
            <div className="flex justify-start items-start gap-3 flex-wrap">
                {addr.map((item, index) => (
                    <div key={index} className="p-2 flex flex-row justify-between w-80 bg-gray-50 dark:bg-slate-900 rounded-md">
                        <p className="font-bold dark:text-gray-300">{item.field}:</p>
                        <p className="font-semibold text-gray-500">{item.value}</p>
                    </div>
                ))}
            </div>
            <div className="w-full py-1 flex justify-center items-center bg-gray-200 dark:bg-slate-800 dark:text-gray-300 text-black font-bold">CONTACT INFORMATION</div>
            <div className=" font-semibold text-gray-500 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure ratione facilis ipsum vel mollitia qui. Fugiat officia libero adipisci. Consequatur labore vero neque impedit velit
                quisquam, sit perferendis molestiae.
            </div>
            <div className="flex justify-start items-start gap-3 flex-wrap">
                {cont.map((item, index) => (
                    <div key={index} className="p-2 flex flex-row justify-between w-80 bg-gray-50 dark:bg-slate-900 rounded-md">
                        <p className="font-bold dark:text-gray-300">{item.field}:</p>
                        <p className="font-semibold text-gray-500">{item.value}</p>
                    </div>
                ))}
            </div>
            <div className="w-full py-1 flex justify-center items-center bg-gray-200 dark:bg-slate-800 dark:text-gray-300 text-black font-bold">EMPLOYMENT INFORMATION</div>
            <div className=" font-semibold text-gray-500 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure ratione facilis ipsum vel mollitia qui. Fugiat officia libero adipisci. Consequatur labore vero neque impedit velit
                quisquam, sit perferendis molestiae.
            </div>
            <div className="flex justify-start items-start gap-3 flex-wrap">
                {emp.map((item, index) => (
                    <div key={index} className="p-2 flex flex-row justify-between w-80 bg-gray-50 dark:bg-slate-900 rounded-md">
                        <p className="font-bold dark:text-gray-300">{item.field}:</p>
                        <p className="font-semibold text-gray-500">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function AccountInformation() {
    const idnt = [
        {
            field: 'Account Number',
            value: '213-343-432-9932-921',
        },
        {
            field: 'Account Type',
            value: 'Debit',
        },
        {
            field: 'Account Status',
            value: 'current',
        },
        {
            field: 'Classification',
            value: '4',
        },
        {
            field: 'Account Owner',
            value: 'Junior',
        },
        {
            field: 'Joint Loan Participant',
            value: 'None',
        },
        {
            field: 'Currency Type',
            value: 'Rwandan Franc',
        },
    ];

    return (
        <div className="pt-5 font-semibold flex flex-col gap-3">
            <div className="py-4 flex justify-start items-start gap-3 flex-wrap">
                {idnt.map((item, index) => (
                    <div key={index} className="p-2 flex flex-row justify-between w-80 bg-gray-50 dark:bg-slate-900 rounded-md">
                        <p className="font-bold dark:text-gray-300">{item.field}:</p>
                        <p className="font-semibold text-gray-500">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function LoanDetails() {
    const idnt = [
        {
            field: 'Date Open',
            value: '12 Jan 2020',
        },
        {
            field: 'Date Updated',
            value: '12 Jan 2021',
        },
        {
            field: 'Terms duration',
            value: '2 years',
        },
        {
            field: 'Repayment Term',
            value: 'Monthly',
        },
        {
            field: 'Opening Balance',
            value: 'RWF 2,500,000',
        },
        {
            field: 'Current Balance',
            value: '12,000,000',
        },
        {
            field: 'Available Credit',
            value: '8,000,000',
        },
        {
            field: 'Current Balance Indicator',
            value: 'lorem Ipsum',
        },
        {
            field: 'Scheduled Payment Amount',
            value: 'RWF 500,000',
        },
    ];

    return (
        <div className="pt-5 font-semibold flex flex-col gap-3">
            <div className="p-3 py-4 font-semibold text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis veniam iusto! Ab ratione, modi illum ipsum dolorem earum reprehenderit, eaque dolores saepe delectus deserunt
                odio esse? Saepe, dolore quisquam.
            </div>
            <div className=" flex justify-start items-start gap-3 flex-wrap">
                {idnt.map((item, index) => (
                    <div key={index} className="p-2 flex flex-row justify-between w-80 bg-gray-50 dark:bg-slate-900 rounded-md">
                        <p className="font-bold dark:text-gray-300">{item.field}:</p>
                        <p className="font-semibold text-gray-500">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function LoanStatus() {
    const idnt = [
        {
            field: 'Amount Past Due',
            value: 'RWF 400,000',
        },
        {
            field: 'Installment in Areas',
            value: 'RWF 500,000',
        },
        {
            field: 'Days in Areas',
            value: '2',
        },
        {
            field: 'Date Closed',
            value: '01 December 2022',
        },
        {
            field: 'Last Payment Date',
            value: '01 February 2020',
        },
        {
            field: 'Interest Rate',
            value: '7%',
        },
        {
            field: 'First Payment Date',
            value: '01 February 200',
        },
        {
            field: 'Nature',
            value: 'lorem Ipsum',
        },
        {
            field: 'Category',
            value: 'Mortgage',
        },
        {
            field: 'Sector of Activity',
            value: 'Nyamirambo',
        },
        {
            field: 'Approval Date',
            value: '01 February 2020',
        },
        {
            field: 'Final Payment Date',
            value: '22 December 2021',
        },
    ];
    const months = [
        {
            month: 'January',
            paid: true,
        },
        {
            month: 'February',
            paid: false,
        },
        {
            month: 'March',
            paid: true,
        },
        {
            month: 'April',
            paid: false,
        },
        {
            month: 'May',
            paid: true,
        },
        {
            month: 'June',
            paid: false,
        },
        {
            month: 'July',
            paid: true,
        },
        {
            month: 'August',
            paid: false,
        },
        {
            month: 'September',
            paid: true,
        },
        {
            month: 'October',
            paid: false,
        },
        {
            month: 'November',
            paid: true,
        },
        {
            month: 'December',
            paid: false,
        },
    ];
    return (
        <div className="pt-5 font-semibold flex flex-col gap-3">
            <div className="p-3 py-4 font-semibold text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis veniam iusto! Ab ratione, modi illum ipsum dolorem earum reprehenderit, eaque dolores saepe delectus deserunt
                odio esse? Saepe, dolore quisquam.
            </div>
            <div className=" flex justify-start items-start gap-3 flex-wrap">
                {idnt.map((item, index) => (
                    <div key={index} className="p-2 flex flex-row justify-between w-80 bg-gray-50 dark:bg-slate-900 rounded-md">
                        <p className="font-bold dark:text-gray-300">{item.field}:</p>
                        <p className="font-semibold text-gray-500">{item.value}</p>
                    </div>
                ))}
            </div>
            <div className="pt-3 p-3 bg-gray-100 dark:bg-slate-800">
                <div className="py-3 px-5">
                    <div className="dropdown">
                        <Dropdown
                            placement={'bottom-start'}
                            btnClassName="border dark:text-secondary-light dark:border-slate-500 px-2 py-1 dropdown-toggle"
                            button={
                                <>
                                    2020
                                    <span>
                                        <IconCaretDown className="ltr:ml-1 rtl:mr-1 inline-block" />
                                    </span>
                                </>
                            }
                        >
                            <ul className="!min-w-[170px]">
                                <li>
                                    <button type="button">2019</button>
                                </li>
                                <li>
                                    <button type="button">2018</button>
                                </li>
                                <li>
                                    <button type="button">2017</button>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                    {months.map((month, index) => (
                        <span key={index} className={`px-3 py-2 w-36 rounded-sm items-center justify-between text-primary bg-gray-200 dark:bg-slate-700 flex flex-row gap-2`}>
                            {month.month}
                            {month.paid ? (
                                <div className="w-5 h-5 flex justify-center items-center rounded-full bg-primary ">
                                    <CheckIcon className="w-3 text-secondary-light" />
                                </div>
                            ) : (
                                <div className="w-5 h-5 flex justify-center items-center rounded-full bg-danger ">
                                    <XMarkIcon className="w-3 text-secondary-light" />
                                </div>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function CreditScore() {
    const crdt = [
        {
            field: 'Payment history',
            value: '35%'
        },
        {
            field: 'Amount owed',
            value: '30%'
        },
        {
            field: 'Length of credit history',
            value: '15%'
        },
        {
            field: 'New credit',
            value: '15%'
        },
        {
            field: 'Type of credit used',
            value: '15%'
        }

    ]
    return (
        <div className="pt-5 font-semibold flex flex-col gap-3">
            <div className="p-3 py-4 font-semibold text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis veniam iusto! Ab ratione, modi illum ipsum dolorem earum reprehenderit, eaque dolores saepe delectus deserunt
                odio esse? Saepe, dolore quisquam.
            </div>
            <div className="p-3 flex flex-col items-center justify-center md:flex-row gap-3">
                <div className="md:w-1/2 w-full">
                    <GaugeChart id="gauge-chart2" 
                        nrOfLevels={30} 
                        percent={0.86}
                        arcPadding={0} 
                        cornerRadius={0}
                        textColor={'#ebe4f7'}
                    />
                </div>
                <div className="flex w-full md:w-1/2 flex-col items-center gap-2">
                    {crdt.map((item, index) => (
                        <div key={index} className="p-2 flex flex-row justify-between w-full bg-gray-50 dark:bg-slate-900 rounded-md">
                            <p className="font-bold dark:text-gray-300">{item.field}:</p>
                            <p className="font-semibold text-gray-500">{item.value}</p>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    );
}
