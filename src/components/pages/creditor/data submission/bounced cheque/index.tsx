
import { Link } from "react-router-dom";

export default function BouncedCheque() {
	return (
		<div>
			<ul className="flex space-x-2 rtl:space-x-reverse">
				<li>
					<Link to="/creditor" className="text-primary hover:underline">
						Dashboard
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<span>Bounced Cheque Registration</span>
				</li>
			</ul>
			<div className="mt-5 panel text-grey-400">
				<div className="text-grey-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
					beatae quae officia optio facilis neque, fugiat eaque, ex natus, earum
					nisi. Sequi reprehenderit placeat cupiditate fugiat quam repellat est
					reiciendis.
				</div>
				<div className=" w-full">
					<div className="p-5">
						<div className="py-4 font-bold">BOUNCED CHEQUE INFORMATION</div>
						<form className="space-y-5 text-gray-600">
							<div>
								<label htmlFor="gridEmail">National ID</label>
								<input
									
									type="email"
									placeholder="Write Here"
									className="form-input"
								/>
							</div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="gridEmail">Account Number</label>
                                    <input
                                        
                                        type="email"
                                        placeholder="Write Here"
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="gridEmail">Bank Name</label>
                                    <input
                                        
                                        type="email"
                                        placeholder="Write Here"
                                        className="form-input"
                                    />
                                </div>
                            </div>
                            <div>
								<label htmlFor="gridEmail">Cheque Number</label>
								<input
									
									type="text"
									placeholder="Write Here"
									className="form-input"
								/>
							</div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="gridEmail">Cheque Date</label>
                                    <input
                                        
                                        type="date"
                                        placeholder="Write Here"
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="gridEmail">Reported Date</label>
                                    <input
                                        
                                        type="date"
                                        placeholder="Write Here"
                                        className="form-input"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="gridEmail">Currency</label>
                                    <input
                                        
                                        type="text"
                                        placeholder="Write Here"
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="gridEmail">Amount</label>
                                    <input
                                        
                                        type="text"
                                        placeholder="Write Here"
                                        className="form-input"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="gridEmail">Returned Cheque Reason</label>
                                    <input
                                        
                                        type="date"
                                        placeholder="Write Here"
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="gridEmail">Beneficiary Name</label>
                                    <input
                                        
                                        type="text"
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
