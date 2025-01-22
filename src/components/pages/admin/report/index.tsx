import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OrderedDataTable from '../../../app_components/datatables/SortedTable';
import ExportDataTable, { TableColumn } from '../../../app_components/datatables/ExportDataTable';
import { PencilIcon } from '@heroicons/react/24/outline';
import { rowData } from '../../../app_components/dummy/reportsData';
export default function AdminReports() {
    const navigate =useNavigate()
    const [loading,setLoading] = useState(false)
    // {
    //     id: 1,
    //     firstName: 'Caroline',
    //     lastName: 'Jensen',
    //     email: 'carolinejensen@zidant.com',
    //     dob: '2004-05-28',
    //     address: {
    //         street: '529 Scholes Street',
    //         city: 'Temperanceville',
    //         zipcode: 5235,
    //         geo: {
    //             lat: 23.806115,
    //             lng: 164.677197,
    //         },
    //     },
    //     phone: '+1 (821) 447-3782',
    //     isActive: true,
    //     age: 39,
    //     company: 'POLARAX',

       
    // },
      const columns: TableColumn<any>[] = [
	
		{
			title: "Names",
			accessor: "path",
			render: (row) => <p>{row.firstName} {row.lastName}</p>,
		},

		{
			title: "Email",
			accessor: "email",
			render: (row) => <p>{row.email}</p>,
		},
        
		{
			title: "Phone",
			accessor: "phone",
			render: (row) => <p>{row.phone}</p>,
		},
        
		{
			title: "Age",
			accessor: "age",
			render: (row) => <p>{row.age}</p>,
		},
                
		{
			title: "Dob",
			accessor: "dob",
			render: (row) => <p>{row.dob}</p>,
		},
                
		{
			title: "Campany",
			accessor: "campany",
			render: (row) => <p>{row.company}</p>,
		},
		{
            title: "Status",
            accessor: "isActive",
            render: (row) => (
              <p style={{ background: row.isActive ? 'green' : 'red' }} className='p-1  text-white text-xs  text-center rounded-full '>
                {row.isActive ? 'True' : 'False'}
              </p>
            ),
          }
,          

		{
			title: "Actions",
			accessor: "actions",
			textAlign: "center",
			render: (row) => (
				<div className="flex gap-2 justify-start">
					<button type="button" onClick={() => navigate('summary')} className="btn btn-primary rounded-full">
                View
            </button>
				</div>
			),
		},
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
                    <span>Reports</span>
                </li>
            </ul>
            <div className="pt-5">

            <ExportDataTable
					columns={columns}
					data={rowData ?? []}
					total= {2}
					currentPage={0}
					nextPage={0}
					previousPage={0}
					lastPage={0}
					isLoading={loading }
				/>
            </div>
        </div>
    );
}
