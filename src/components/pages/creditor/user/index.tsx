import React from "react";
import ExportDataTable, {
	TableColumn,
} from "../../../app_components/datatables/ExportDataTable";
import { Link, useNavigate } from "react-router-dom";
type RowData = {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	dob: string;
	phone: string;
	isActive: boolean;
	age: number;
	company: string;
};

const rowData: RowData[] = [
	{
		id: 1,
		firstName: "Caroline",
		lastName: "Jensen",
		email: "carolinejensen@zidant.com",
		dob: "2004-05-28",

		phone: "+1 (821) 447-3782",
		isActive: true,
		age: 39,
		company: "POLARAX",
	},
	{
		id: 2,
		firstName: "Celeste",
		lastName: "Grant",
		email: "celestegrant@polarax.com",
		dob: "1989-11-19",
		phone: "+1 (838) 515-3408",
		isActive: false,
		age: 32,
		company: "MANGLO",
	},
	{
		id: 3,
		firstName: "Tillman",
		lastName: "Forbes",
		email: "tillmanforbes@manglo.com",
		dob: "2016-09-05",
		phone: "+1 (969) 496-2892",
		isActive: false,
		age: 26,
		company: "APPLIDECK",
	},
	{
		id: 4,
		firstName: "Daisy",
		lastName: "Whitley",
		email: "daisywhitley@applideck.com",
		dob: "1987-03-23",
		phone: "+1 (861) 564-2877",
		isActive: true,
		age: 21,
		company: "VOLAX",
	},
	{
		id: 5,
		firstName: "Weber",
		lastName: "Bowman",
		email: "weberbowman@volax.com",
		dob: "1983-02-24",
		phone: "+1 (962) 466-3483",
		isActive: false,
		age: 26,
		company: "ORBAXTER",
	},
	{
		id: 6,
		firstName: "Buckley",
		lastName: "Townsend",
		email: "buckleytownsend@orbaxter.com",
		dob: "2011-05-29",
		phone: "+1 (884) 595-2643",
		isActive: true,
		age: 40,
		company: "OPPORTECH",
	},
	{
		id: 7,
		firstName: "Latoya",
		lastName: "Bradshaw",
		email: "latoyabradshaw@opportech.com",
		dob: "2010-11-23",
		phone: "+1 (906) 474-3155",
		isActive: true,
		age: 24,
		company: "GORGANIC",
	},
	{
		id: 8,
		firstName: "Kate",
		lastName: "Lindsay",
		email: "katelindsay@gorganic.com",
		dob: "1987-07-02",

		phone: "+1 (930) 546-2952",
		isActive: true,
		age: 24,
		company: "AVIT",
	},
	{
		id: 9,
		firstName: "Marva",
		lastName: "Sandoval",
		email: "marvasandoval@avit.com",
		dob: "2010-11-02",

		phone: "+1 (927) 566-3600",
		isActive: false,
		age: 28,
		company: "QUILCH",
	},
	{
		id: 10,
		firstName: "Decker",
		lastName: "Russell",
		email: "deckerrussell@quilch.com",
		dob: "1994-04-21",

		phone: "+1 (846) 535-3283",
		isActive: false,
		age: 27,
		company: "MEMORA",
	},
	{
		id: 11,
		firstName: "Odom",
		lastName: "Mills",
		email: "odommills@memora.com",
		dob: "2010-01-24",

		phone: "+1 (995) 525-3402",
		isActive: true,
		age: 34,
		company: "ZORROMOP",
	},
	{
		id: 12,
		firstName: "Sellers",
		lastName: "Walters",
		email: "sellerswalters@zorromop.com",
		dob: "1975-11-12",

		phone: "+1 (830) 430-3157",
		isActive: true,
		age: 28,
		company: "ORBOID",
	},
	{
		id: 13,
		firstName: "Wendi",
		lastName: "Powers",
		email: "wendipowers@orboid.com",
		dob: "1979-06-02",

		phone: "+1 (863) 457-2088",
		isActive: true,
		age: 31,
		company: "SNORUS",
	},
	{
		id: 14,
		firstName: "Sophie",
		lastName: "Horn",
		email: "sophiehorn@snorus.com",
		dob: "2018-09-20",

		phone: "+1 (885) 418-3948",
		isActive: true,
		age: 22,
		company: "XTH",
	},
	{
		id: 15,
		firstName: "Levine",
		lastName: "Rodriquez",
		email: "levinerodriquez@xth.com",
		dob: "1973-02-08",

		phone: "+1 (999) 565-3239",
		isActive: true,
		age: 27,
		company: "COMTRACT",
	},
	{
		id: 16,
		firstName: "Little",
		lastName: "Hatfield",
		email: "littlehatfield@comtract.com",
		dob: "2012-01-03",

		phone: "+1 (812) 488-3011",
		isActive: false,
		age: 33,
		company: "ZIDANT",
	},
	{
		id: 17,
		firstName: "Larson",
		lastName: "Kelly",
		email: "larsonkelly@zidant.com",
		dob: "2010-06-14",

		phone: "+1 (892) 484-2162",
		isActive: true,
		age: 20,
		company: "SUREPLEX",
	},
	{
		id: 18,
		firstName: "Kendra",
		lastName: "Molina",
		email: "kendramolina@sureplex.com",
		dob: "2002-07-19",

		phone: "+1 (920) 528-3330",
		isActive: false,
		age: 31,
		company: "DANJA",
	},
	{
		id: 19,
		firstName: "Ebony",
		lastName: "Livingston",
		email: "ebonylivingston@danja.com",
		dob: "1994-10-18",

		phone: "+1 (970) 591-3039",
		isActive: false,
		age: 33,
		company: "EURON",
	},
	{
		id: 20,
		firstName: "Kaufman",
		lastName: "Rush",
		email: "kaufmanrush@euron.com",
		dob: "2011-07-10",

		phone: "+1 (924) 463-2934",
		isActive: false,
		age: 39,
		company: "ILLUMITY",
	},
	{
		id: 21,
		firstName: "Frank",
		lastName: "Hays",
		email: "frankhays@illumity.com",
		dob: "2005-06-15",

		phone: "+1 (930) 577-2670",
		isActive: false,
		age: 31,
		company: "SYBIXTEX",
	},
	{
		id: 22,
		firstName: "Carmella",
		lastName: "Mccarty",
		email: "carmellamccarty@sybixtex.com",
		dob: "1980-03-06",

		phone: "+1 (876) 456-3218",
		isActive: true,
		age: 21,
		company: "ZEDALIS",
	},
	{
		id: 23,
		firstName: "Massey",
		lastName: "Owen",
		email: "masseyowen@zedalis.com",
		dob: "2012-03-01",

		phone: "+1 (917) 567-3786",
		isActive: false,
		age: 40,
		company: "DYNO",
	},
	{
		id: 24,
		firstName: "Lottie",
		lastName: "Lowery",
		email: "lottielowery@dyno.com",
		dob: "1982-10-10",

		phone: "+1 (912) 539-3498",
		isActive: true,
		age: 36,
		company: "MULTIFLEX",
	},
	{
		id: 25,
		firstName: "Addie",
		lastName: "Luna",
		email: "addieluna@multiflex.com",
		dob: "1988-05-01",

		phone: "+1 (962) 537-2981",
		isActive: true,
		age: 32,
		company: "PHARMACON",
	},
];

export default function CreditorUserManagement() {
	const columns: TableColumn<RowData>[] = [
		{
			title: "id",
			accessor: 'id',
			render: (row, index) => <p>{index}</p>,
		},
		{
			title: "First Name",
			accessor: 'firstName',
			render: (row) => <p>{row.firstName}</p>,
		},
		{
			title: "Last Name",
			accessor: 'lastName',
			render: (row) => <p>{row.lastName}</p>,
		},
		{
			title: "Email",
			accessor: 'email',
			render: (row) => <p>{row.email}</p>,
		},
		{
			title: "Date of Birth",
			accessor: 'dob',
			render: (row) => <p>{row.dob}</p>,
		},
		{
			title: "Phone",
			accessor: 'phone',
			render: (row) => <p>{row.phone}</p>,
		},
		{
			title: "Is Active",
			accessor: 'isActive',
			render: (row) => <p>{row.isActive ? "Yes" : "No"}</p>,
		},
		{
			title: "Age",
			accessor: 'age',
			render: (row) => <p>{row.age}</p>,
		},
		{
			title: "Company",
			accessor: 'company',
			render: (row) => <p>{row.company}</p>,
		},
		{
			title: "Actions",
			accessor: '',
			render: (row) => (
				<div>
					<button className="btn-primary btn btn-sm">Edit</button>
				</div>
			),
		},
		// Add more columns as needed
	];
	const navigate = useNavigate()
	return (
		<div>
			<ul className="flex space-x-2 rtl:space-x-reverse">
				<li>
					<Link to="/creditor" className="text-primary hover:underline">
						Dashboard
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<span>User Management</span>
				</li>
			</ul>
			<div className="mt-5">
			<div className="flex flex-row justify-end items-center my-3">
				<button onClick={() => navigate('new')} title="create user" className="btn btn-primary btn-md">Create User</button>
			</div>
			<ExportDataTable
				columns={columns}
				data={rowData}
				total={0}
				currentPage={0}
				nextPage={0}
				previousPage={0}
				lastPage={0}
				isLoading={false}
			/>
			</div>
		</div>
	);
}
