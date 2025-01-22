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

export default function Collaterals() {
	return (
		<div>
			<ul className="flex space-x-2 rtl:space-x-reverse">
				<li>
					<Link to="/creditor" className="text-primary hover:underline">
						Dashboard
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<span>Collateral Registration</span>
				</li>
			</ul>
			<div className="mt-5 panel text-grey-400">
				<div className="text-grey-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
					beatae quae officia optio facilis neque, fugiat eaque, ex natus, earum
					nisi. Sequi reprehenderit placeat cupiditate fugiat quam repellat est
					reiciendis.
				</div>
				<div className="w-full">
					<div className="p-5">
						<div className="py-4 font-bold">COLLATERAL INFORMATION</div>
						<form className="space-y-5 text-gray-600">
							<div>
								<label htmlFor="gridEmail">Account Number</label>
								<input
									
									type="email"
									placeholder="Write Here"
									className="form-input"
								/>
							</div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="gridEmail">Collateral Type</label>
                                    <input
                                        
                                        type="email"
                                        placeholder="Write Here"
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="gridEmail">Collateral Value</label>
                                    <input
                                        
                                        type="email"
                                        placeholder="Write Here"
                                        className="form-input"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="gridEmail">Collateral Last Valuation Date</label>
                                    <input
                                        
                                        type="date"
                                        placeholder="Write Here"
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="gridEmail">Collateral Expiry Date</label>
                                    <input
                                        
                                        type="date"
                                        placeholder="Write Here"
                                        className="form-input"
                                    />
                                </div>
                            </div>
							<button type="button" className={`btn btn-primary`}>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
