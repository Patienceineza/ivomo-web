import {
	BanknotesIcon,
	BriefcaseIcon,
	CalendarDaysIcon,
	DevicePhoneMobileIcon,
	HomeModernIcon,
	ShareIcon,
	UserCircleIcon,
	UserIcon,
} from "@heroicons/react/24/outline";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import IconDollarSign from "../../../../Icon/IconDollarSign";

export default function Shareholder() {
	const [tab, setTab] = useState(0);

	const tabButtons = [
		{
			text: "Shares Details",
			icon: <ShareIcon className="w-7 text-gray-700" />,
		},
		{
			text: "Shareholder Info",
			icon: <CalendarDaysIcon className="w-7 text-gray-700" />,
		},
		{
			text: "Address",
			icon: <HomeModernIcon className="w-7 text-gray-700" />,
		},
	];

	const tabs = [<ShareDetails />, <ShareholderInfo />, <AddressInfo />];

	return (
		<div>
			<ul className="flex space-x-2 rtl:space-x-reverse">
				<li>
					<Link to="/creditor" className="text-primary hover:underline">
						Dashboard
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<span>Shareholder Registration</span>
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
								width: `${`${Math.floor(
									(100 / tabButtons.length) * (tab + 1) - 16
								).toString()}%`}`,
							}}
							className={` bg-primary h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}
						></div>
						<ul className={`mb-5 flex flex-wrap`}>
							{tabButtons.map((item, index) => (
								<TabButton
									key={index}
									tab={tab}
									text={item.text}
									icon={item.icon}
									setTab={setTab}
									index={index}
								/>
							))}
						</ul>
					</div>
					<div>
						{tabs.map((body, index) =>
							tab === index ? (
								<div key={index} className="mb-5">
									{body}
								</div>
							) : (
								""
							)
						)}
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

function TabButton(props: {
	tab: number;
	setTab: Dispatch<SetStateAction<number>>;
	text: string;
	icon: ReactNode;
	index: number;
}) {
	const { tab, setTab, index, text, icon } = props;
	return (
		<li className="mx-auto flex flex-col items-center justify-center gap-1">
			<button
				type="button"
				className={`${
					!(tab < index) ? "!border-primary !bg-primary text-white" : ""
				}
                    border-[3px] text-grey-400 border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`}
				onClick={() => setTab(index)}
			>
				{icon}
			</button>
			<span
				className={`${
					!(tab < index) ? "text-primary " : ""
				} text-sm text-center block mt-2`}
			>
				{text}
			</span>
		</li>
	);
}

function ShareholderInfo() {
	return (
		<div className="p-5">
			<div className="py-4 font-bold">SHAREHOLDER INFORMATION</div>
			<form className="space-y-5 text-gray-600">
				<div>
					<label htmlFor="gridEmail">Country</label>
					<input
						id="institutionName"
						type="email"
						placeholder="Write Here"
						className="form-input"
					/>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<label htmlFor="gridEmail">National ID</label>
						<input
							id="institutionName"
							type="email"
							placeholder="Write Here"
							className="form-input"
						/>
					</div>
					<div>
						<label htmlFor="gridPassword">PassPort No</label>
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
						<label htmlFor="gridEmail">Nationality</label>
						<input
							type="text"
							placeholder="Write Here"
							className="form-input"
						/>
					</div>
					<div>
						<label htmlFor="gridPassword">Date of Birth/ Company Registration Date</label>
						<input
							type="date"
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
	);
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
						<label htmlFor="gridPassword">
							Postal Address Line 2 Postal Code
						</label>
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
	);
}

function ShareDetails() {
	return (
		<div className="p-5">
			<div className="py-4 font-bold">SHARE DETAILS</div>
			<form className="space-y-5 text-gray-600">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<label htmlFor="gridEmail">Account Number</label>
						<input
							id="institutionName"
							type="email"
							placeholder="Write Here"
							className="form-input"
						/>
					</div>
					<div>
						<label htmlFor="gridPassword">Shareholder Type</label>
						<input
							id="tradingName"
							type="text"
							placeholder="Write Here"
							className="form-input"
						/>
					</div>
				</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<label htmlFor="gridEmail">Number of shares</label>
						<input
							id="institutionName"
							type="email"
							placeholder="Write Here"
							className="form-input"
						/>
					</div>
					<div>
						<label htmlFor="gridPassword">Percentage of shares</label>
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
	);
}
