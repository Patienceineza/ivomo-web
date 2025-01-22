import { BanknotesIcon, BriefcaseIcon, DevicePhoneMobileIcon, HomeModernIcon, UserCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import IconDollarSign from "../../../../Icon/IconDollarSign";

export default function Personal() {
	const [tab, setTab] = useState(0);

    const tabButtons = [
        {
            text: 'Personal Info',
            icon: <UserIcon className="w-7 text-gray-700" />,
        },
        {
            text: 'Address',
            icon: <HomeModernIcon className="w-7 text-gray-700" />,
        },
        {
            text: 'Contact Info',
            icon: <DevicePhoneMobileIcon className="w-7 text-gray-700" />,
        },
        {
            text: 'Employer Info',
            icon: <BriefcaseIcon className="w-7 text-gray-700" />,
        },
        {
            text: 'Account Info',
            icon: <UserCircleIcon className="w-7 text-gray-700" />,
        },
        {
            text: 'Loan Details',
            icon: <BanknotesIcon className="w-7 text-gray-700" />,
        },
        {
            text: 'Loan Status',
            icon: <IconDollarSign className="w-7 text-gray-700" />,
        },
    ]

    const tabs = [
        <PersonaInfo />,
        <AddressInfo />,
        <ContactInfo />,
        <EmployerInfo />,
        <AccountInfo />,
        <LoanDetails />,
        <LoanStatus />
    ]

	return (
		<div>
			<ul className="flex space-x-2 rtl:space-x-reverse">
				<li>
					<Link to="/creditor" className="text-primary hover:underline">
						Dashboard
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<span>Consumer Registration</span>
				</li>
			</ul>
			<div className="mt-5 panel text-grey-400">
				<div className="text-grey-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
					beatae quae officia optio facilis neque, fugiat eaque, ex natus, earum
					nisi. Sequi reprehenderit placeat cupiditate fugiat quam repellat est
					reiciendis.
				</div>
				<div className="inline-block mt-5 w-full">
					<div className="relative z-[1]">
						<div
                            style={{
                                width: `${`${Math.floor(((100 / (tabButtons.length)) * (tab + 1)) - 10).toString()}%`}`
                            }}
							className={` bg-primary h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}
						></div>
						<ul className={`mb-5 flex flex-wrap`}>
							{tabButtons.map((item, index) => (
                                <TabButton key={index} tab={tab} text={item.text} icon={item.icon} setTab={setTab} index={index} />
                            ))}
						</ul>
					</div>
					<div>
						{tabs.map((body, index) => (
                            tab === index ? <div key={index} className="mb-5">
                                {body}
                            </div> : ''
                        ))}
					</div>
					<div className="flex justify-between">
						<button
							type="button"
							className={`btn btn-primary ${tab === 0 ? "hidden" : ""}`}
							onClick={() => setTab(() => tab - 1)}
						>
							Back
						</button>
						<button
							type="button"
							className="btn btn-primary ltr:ml-auto rtl:mr-auto"
							onClick={() => setTab(() => tab + 1)}
						>
							{tab === tabButtons.length - 1 ? "Finish" : "Next"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

function TabButton(props: { tab: number, setTab: Dispatch<SetStateAction<number>>, text: string, icon: ReactNode, index: number }) {
    const { tab, setTab, index, text, icon } = props;
    return <li className="mx-auto flex flex-col items-center justify-center gap-1">
        <button
            type="button"
            className={`${!(tab < index)
                    ? "!border-primary !bg-primary text-white"
                    : ""}
                    border-[3px] text-grey-400 border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`}
            onClick={() => setTab(index)}
        >
            {icon}
        </button>
        <span
            className={`${!(tab < index) ? "text-primary " : ""} text-sm text-center block mt-2`}
        >
            {text}
        </span>
    </li>;
}


function PersonaInfo() {
    return (
        <div className="p-5">
            <div className="py-4 font-bold">PERSONAL INFORMATION</div>
            <form className="space-y-5 text-gray-600">
                    <div>
                        <label htmlFor="gridEmail">National ID</label>
                        <input
                            id="institutionName"
                            type="email"
                            placeholder="Write Here"
                            className="form-input"
                        />
                    </div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Salutation</label>
							<input
								id="institutionName"
								type="email"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridPassword">Surname</label>
							<input
								id="tradingName"
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						<div>
							<label htmlFor="gridEmail">Forename or Initial 1</label>
							<input
								type="email"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridPassword">Forename or Initial 2</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridPassword">Forename or Initial 3</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						<div>
							<label htmlFor="gridEmail">National ID Number</label>
							<input
								type="email"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridPassword">Passport Number</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridPassword">Nationality</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						<div>
							<label htmlFor="gridEmail">Driving License No</label>
							<input
								type="email"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridPassword">Social Security Number</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridPassword">Health Insurance Number</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Marital Status</label>
							<input
								id="institutionName"
								type="email"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridPassword">No of Dependents</label>
							<input
								id="tradingName"
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						<div>
							<label htmlFor="gridEmail">Gender</label>
							<input
								type="email"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridPassword">Date of Birth</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridPassword">Place Of Birth</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
				</form>
        </div>
    )
}

function AddressInfo() {
    return (
        <div className="p-5">
            <div className="py-4 font-bold">ADDRESS</div>
            <form className="space-y-5 text-gray-600">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Postal Address Line 1 Number</label>
							<input
								id="institutionName"
								type="email"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridPassword">Postal Address Line 2 Postal Code</label>
							<input
								id="tradingName"
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<div>
							<label htmlFor="gridEmail"> Province</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail"> District</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridPassword"> Sector</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridPassword"> Village</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Street Number (optional)</label>
							<input
								id="institutionName"
								type="email"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridPassword">House Number (Optional)</label>
							<input
								id="tradingName"
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
				</form>
        </div>
    )
}

function ContactInfo() {
    return (
        <div className="p-5">
            <div className="py-4 font-bold">CONTACT INFORMATION</div>
            <form className="space-y-5 text-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="gridPassword">Email Address</label>
                            <input
                                id="tradingName"
                                type="text"
                                placeholder="Write Here"
                                className="form-input"
                            />
                        </div>
                        <div>
                            <label htmlFor="gridEmail">Residence Type</label>
                            <input
                                type="text"
                                placeholder="Write Here"
                                className="form-input"
                            />
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
							<label htmlFor="gridEmail">Home Telephone</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridPassword">Work Telephone</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridPassword">Mobile Telephone</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
				</form>
        </div>
    )
}

function AccountInfo() {
    return (
        <div className="p-5">
            <div className="py-4 font-bold">CONTACT INFORMATION</div>
            <form className="space-y-5 text-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Account Number</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Account Type</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Account Status</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Account Classification</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Physical Address Postal Code</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Physical Address Plot Number</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Account Owner</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Joint Loan Participants</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Currency Type</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
				</form>
        </div>
    )
}

function LoanDetails() {
    return (
        <div className="p-5">
            <div className="py-4 font-bold">LOAN DETAILS</div>
            <form className="space-y-5 text-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Date Opened</label>
							<input
								type="date"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Date Updated</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div>
							<label htmlFor="gridEmail">Terms Duration</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Repayment Term</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridEmail">Opening Balance</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
							<label htmlFor="gridEmail">Current Balance</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Current Balance Indicator</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridEmail">Available Credit</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
							<label htmlFor="gridEmail">Scheduled Monthly Payment Amount</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridEmail">Actual Payment Amount</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
				</form>
        </div>
    )
}

function LoanStatus() {
    return (
        <div className="p-5">
            <div className="py-4 font-bold">CONTACT INFORMATION</div>
            <form className="space-y-5 text-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Amount Past Due</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Installments in Arrears</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div>
							<label htmlFor="gridEmail">Days in Arrears</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Date Closed</label>
							<input
								type="date"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Last Payment Date</label>
							<input
								type="date"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div>
							<label htmlFor="gridEmail">Interest Rate</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">First Payment Date</label>
							<input
								type="date"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Nature</label>
							<input
								type="date"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
						<div>
							<label htmlFor="gridEmail">Category</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div>
							<label htmlFor="gridEmail">Sector of Activity</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Approval Date</label>
							<input
								type="date"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Final Payment Date</label>
							<input
								type="date"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
				</form>
        </div>
    )
}

function EmployerInfo() {
    return (
        <div className="p-5">
            <div className="py-4 font-bold">EMPLOYER INFORMATION</div>
            <form className="space-y-5 text-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Fascimile</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Employer Name</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Employer Address Line 1</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Employer Address Line 2</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Employer Town</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Employer Country</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div>
                        <label htmlFor="gridEmail">Occupation</label>
                        <input
                            type="text"
                            placeholder="Write Here"
                            className="form-input"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Income</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
                        <div>
							<label htmlFor="gridEmail">Income Frequency</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Currency Type</label>
							<input
								type="text"
								placeholder="Write Here"
								className="form-input"
							/>
						</div>
					</div>
				</form>
        </div>
    )
}
