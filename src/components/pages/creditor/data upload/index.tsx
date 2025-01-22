
import { Link } from "react-router-dom";

export default function DataUpload() {
	return (
		<div>
			<ul className="flex space-x-2 rtl:space-x-reverse">
				<li>
					<Link to="/creditor" className="text-primary hover:underline">
						Dashboard
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<span>Data Upload</span>
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
						<form className="space-y-5 text-gray-600">
							<div>
								<label htmlFor="gridEmail">
									File
								</label>
								<input
									type="file"
									placeholder="Write Here"
									className="form-input"
								/>
							</div>
							<button type="button" className={`btn btn-primary`}>
								Upload
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
