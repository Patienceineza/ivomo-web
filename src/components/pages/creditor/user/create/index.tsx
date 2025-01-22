import React from "react";
import { Link } from "react-router-dom";

export default function CreditorCreateUser() {
	return (
		<div>
			<ul className="flex space-x-2 rtl:space-x-reverse">
				<li>
					<Link to="/creditor" className="text-primary hover:underline">
						Dashboard
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<Link to="/creditor/user" className="text-primary hover:underline">
						User Management
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<span>Create User</span>
				</li>
			</ul>
			<div className="mt-5 panel">
				<form className="space-y-5 text-gray-600">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label htmlFor="gridEmail">Email</label>
							<input
								id="gridEmail"
								type="email"
								placeholder="Enter Email"
								className="form-input"
							/>
						</div>
						<div>
							<label htmlFor="gridPassword">Password</label>
							<input
								id="gridPassword"
								type="Password"
								placeholder="Enter Password"
								className="form-input"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="gridAddress1">Address</label>
						<input
							id="gridAddress1"
							type="text"
							placeholder="Enter Address"
							defaultValue="1234 Main St"
							className="form-input"
						/>
					</div>
					<div>
						<label htmlFor="email">Email Address</label>
						<input
							id="email"
							type="text"
							placeholder="Enter Email Address"
							defaultValue=""
							className="form-input"
						/>
					</div>
                    <div>
						<label htmlFor="phone">Phone Number</label>
						<input
							id="phone"
							type="text"
							placeholder="Enter Phone Number"
							defaultValue=""
							className="form-input"
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
						<div className="md:col-span-2">
							<label htmlFor="institution">Institution</label>
							<input
								id="institution"
								type="text"
								placeholder="Enter Institution"
								className="form-input"
							/>
						</div>
						<div className="md:col-span-2">
							<label htmlFor="gridZip">Passport</label>
							<input
								id="gridZip"
								type="text"
								placeholder="Enter Passport"
								className="form-input"
							/>
						</div>
					</div>
					<button type="submit" className="btn btn-primary !mt-6">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
