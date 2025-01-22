import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, ReactNode, SetStateAction } from "react";

export default function Modal(props: { children: ReactNode, show: boolean, setShow : React.Dispatch<SetStateAction<boolean>>, title: string }) {
    const { show, setShow, title, children } = props;
	return (
		<Transition appear show={show} as={Fragment}>
			<Dialog as="div" open={show} onClose={() => setShow(false)}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0" />
				</Transition.Child>
				<div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
					<div className="flex items-center justify-center min-h-screen px-4">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="panel border-0 p-0 rounded-lg  w-full max-w-sm my-8 text-black dark:text-white-dark">
								<div className="flex rounded-t-lg bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
									<h5 className="font-bold text-lg">{title}</h5>
									<button
										onClick={() => setShow(false)}
										type="button"
										className="text-white-dark hover:text-dark"
									>
										<XMarkIcon className="w-5 text-black dark:text-secondary-light" />
									</button>
								</div>
								<div className="py-5 px-3">
									{children}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
