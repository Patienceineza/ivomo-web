import { CodeBracketSquareIcon, DocumentDuplicateIcon, PhoneIcon, ShareIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Developer() {
	return (
		<div>
			<ul className="flex space-x-2 rtl:space-x-reverse">
				<li>
					<Link to="/creditor" className="text-primary hover:underline">
						Dashboard
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<span>Developer</span>
				</li>
			</ul>
			<div className="mt-5 ">
                <div className="grid-cols-1 md:mt-16 grid w-full md:grid-cols-3 gap-3 text-gray-400">
                    <Box
                        icon={<DocumentDuplicateIcon className="w-16" />}
                        title="Documentation"
                        text="Lorem ipsum dolor sit amet, labore et dolore magna aliqua."
                    />
                    <Box
                        icon={<CodeBracketSquareIcon className="w-16" />}
                        title="Api Reference"
                        text="Lorem ipsum dolor sit amet, labore et dolore magna aliqua."
                    />

                    <Box
                        icon={<PhoneIcon className="w-16" />}
                        title="Get Help"
                        text="Lorem ipsum dolor sit amet, labore et dolore magna aliqua."
                    />
                </div>
			</div>
		</div>
	);
}
function Box(props: { icon: JSX.Element, title: string, text: string  }) {
    return <div className="border hover:bg-gray-200 dark:hover:bg-slate-800 cursor-pointer w-full h-64 flex flex-col border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6">
        <div className="text-primary mb-5">
            {props.icon}
        </div>
        <h5 className="text-lg font-semibold mb-3.5 dark:text-white-light">
            {props.title}
        </h5>
        <p className="text-white-dark text-[15px]  mb-3.5">
            {props.text}
        </p>
    </div>;
}

