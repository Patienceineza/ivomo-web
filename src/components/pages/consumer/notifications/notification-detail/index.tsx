import React from "react";

export default function ConsumerNotification() {
	return (
		<main className="flex">
			<div className="container mx-auto">
				<div className="">
					<h1 className="text-lg">
						Notifications / {" "}
						<span className="font-normal">
							Your logged into your account on chrome website
						</span>
					</h1>
				</div>
				<div className="w-full h-[500px] pl-10 mt-3  pt-3 pr-10">
					<div className="w-full text-sm text-[#5F5E5E] rounded-lg shadow bg-white p-8">
						<h1 className="w-full pb-3">
							<strong>Notification Type:</strong>
							<span> Account Login Alert</span>
						</h1>
						<h1 className="w-full pb-3">
							<strong>Notification Source:</strong>
							<span> IVOMO</span>
						</h1>
						<h1 className="w-full pb-3">
							<strong>Message:</strong>
						</h1>
						<p className="w-full pb-3">
							Lorem ipsum dolor sit amet consectetur. Odio consequat eget amet
							mattis sit cursus. Porta suscipit tincidunt aliquet malesuada.
							Turpis adipiscing molestie est in. Placerat placerat Lorem ipsum
							dolor sit amet consectetur. Odio consequat eget amet mattis sit
							cursus. Porta suscipit tincidunt aliquet malesuada. Turpis
							adipiscing molestie est in. Placerat placerat Lorem ipsum dolor
							sit amet consectetur. Odio consequat eget amet mattis sit cursus.
							Porta suscipit tincidunt aliquet malesuada. Turpis adipiscing
							molestie est in. Placerat placerat Lorem ipsum dolor sit amet
							consectetur. Odio consequat eget amet mattis sit cursus. Porta
							suscipit tincidunt aliquet malesuada. Turpis adipiscing molestie
							est in. Placerat placerat Lorem ipsum dolor sit amet consectetur.
							Odio consequat eget amet mattis sit cursus. Porta suscipit
							tincidunt aliquet malesuada. Turpis adipiscing molestie est in.
							Placerat placerat
						</p>
						<h1 className="w-full pb-3">
							<strong>Recommendation:</strong>
							<span>
								{" "}
								Lorem ipsum dolor sit amet consectetur. Odio consequat eget amet
								mattis sit cursus. Porta suscipit tincidunt aliquet malesuada.
								Turpis adipiscing molestie{" "}
							</span>
						</h1>
						<h1 className="w-full pb-3">
							<strong>Date:</strong>
							<span> 20 - May - 2022</span>
						</h1>
					</div>
				</div>
			</div>
		</main>
	);
}
