import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ExportDataTable, { TableColumn } from "../../../app_components/datatables/ExportDataTable";

type RowData = {
	id: number;
	email: string;
	position: string;
	phone: string;
	status: boolean;
	createdAt: string;
};

const rowData: RowData[] = [
    {
        id: 1,
        email: "john.doe@example.com",
        position: "Software Engineer",
        phone: "555-555-5555",
        status: true,
        createdAt: "2023-10-12"
    },
    {
        id: 2,
        email: "jane.smith@example.com",
        position: "Product Manager",
        phone: "555-123-4567",
        status: false,
        createdAt: "2023-10-12"
    },
    {
        id: 3,
        email: "bob.johnson@example.com",
        position: "Data Analyst",
        phone: "555-987-6543",
        status: true,
        createdAt: "2023-10-12"
    },
    {
        id: 4,
        email: "susan.white@example.com",
        position: "Marketing Coordinator",
        phone: "555-789-1234",
        status: true,
        createdAt: "2023-10-12"
    },
    {
        id: 5,
        email: "michael.brown@example.com",
        position: "HR Specialist",
        phone: "555-654-3210",
        status: false,
        createdAt: "2023-10-12"
    },
    {
        id: 6,
        email: "lisa.miller@example.com",
        position: "Financial Analyst",
        phone: "555-234-5678",
        status: true,
        createdAt: "2023-10-12"
    }
    // You can add even more objects with random values as needed
];


export default function AdminCreditorManagement() {
    const navigate = useNavigate();
    const columns: TableColumn<RowData>[] = [
		{
			title: "id",
			accessor: '',
			render: (row, index) => <p>{index}</p>,
		},
        {
            title: "Position",
			accessor: 'position',
            render: (row) => <p>{row.position}</p>,
        },
		{
			title: "Email",
			accessor: 'email',
			render: (row) => <p>{row.email}</p>,
		},
		{
			title: "Phone",
			accessor: 'phone',
			render: (row) => <p>{row.phone}</p>,
		},
		{
			title: "Status",
			accessor: 'status',
			render: (row) => <p>{row.status ? "Yes" : "No"}</p>,
		},
		{
			title: "Created At",
			accessor: 'createdAt',
			render: (row) => <p>{row.createdAt}</p>,
		},
		{
			title: "Actions",
			accessor: 'actions',
			render: (row) => (
				<div>
					<button className="btn-primary btn btn-sm">Edit</button>
				</div>
			),
		},
		// Add more columns as needed
	];
	return (
		<div>
			<ul className="flex space-x-2 rtl:space-x-reverse">
				<li>
					<Link to="/" className="text-primary hover:underline">
						Dashboard
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<span>Creditor Management</span>
				</li>
			</ul>
            <div className="mt-5 ">
            <div className="flex flex-row justify-end items-center my-3">
				<button onClick={() => navigate('new')} title="create user" className="btn btn-primary btn-md">Create Creditor</button>
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
