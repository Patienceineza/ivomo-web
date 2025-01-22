import React from "react";
import { Link } from "react-router-dom";

export default function AdminNotificationDetail() {
	return (
		<main className="flex">
			<div className="container mx-auto">
				<ul className="flex space-x-2 rtl:space-x-reverse">
					<li>
						<Link to="/admin" className="text-primary hover:underline">
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							to="/admin/notifications"
							className="text-primary before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 hover:underline"
						>
							Notifications
						</Link>
					</li>
					<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
						<span>Notification Title</span>
					</li>
				</ul>
				<div className="panel mt-5 flex-col flex gap-2">
					<div className="p-2 flex flex-row justify-between w-full bg-gray-50 dark:bg-slate-900 rounded-md">
						<p className="font-bold dark:text-gray-300">Notification Type:</p>
						<p className="font-semibold text-gray-500">Account Login Alert</p>
					</div>
					<div className="p-2 flex flex-row justify-between w-full bg-gray-50 dark:bg-slate-900 rounded-md">
						<p className="font-bold dark:text-gray-300">Notification Source:</p>
						<p className="font-semibold text-gray-500">Info Cross</p>
					</div>
					<div className="p-2 flex flex-col justify-between gap-2 w-full bg-gray-50 dark:bg-slate-900 rounded-md">
						<p className="font-bold dark:text-gray-300">Message:</p>
						<p className="font-semibold text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. 
							Adipisci voluptatibus fugit inventore similique exercitationem 
							cum saepe soluta magni ex! Laborum nemo magnam aspernatur 
							dolorum placeat corporis odio quo unde possimus?
						</p>
					</div>
					<div className="p-2 flex flex-row justify-between w-full bg-gray-50 dark:bg-slate-900 rounded-md">
						<p className="font-bold dark:text-gray-300">Recommendation:</p>
						<p className="font-semibold text-gray-500">Account Login Alert</p>
					</div>
					<div className="p-2 flex flex-row justify-between w-full bg-gray-50 dark:bg-slate-900 rounded-md">
						<p className="font-bold dark:text-gray-300">Date:</p>
						<p className="font-semibold text-gray-500">20-May-2023</p>
					</div>
				</div>
			</div>
		</main>
	);
}
