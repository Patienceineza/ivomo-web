import { Link, useNavigate } from "react-router-dom";
import SimpleTable from "../../../app_components/tables/simple_table";
import BasicDataTable from "../../../app_components/datatables/Basic";
import ExportDataTable, { TableColumn } from "../../../app_components/datatables/ExportDataTable";
import { useState } from "react";

export default function CreditorNotifications() {
	const Navigate = useNavigate();
    const handleNavigate = () => {
        Navigate('/admin/notifications/detail')
    }
    
      
      const data = [
        {
          no: 1,
          notification: 'You logged into chrome website',
          date: '22-july-2023',
          
        },
        {
            no: 2,
            notification: 'You logged into chrome website',
            date: '23-july-2023',
            
          },
          {
            no: 3,
            notification: 'You logged into chrome website',
            date: '22-july-2023',
            
          },
          {
            no: 4,
            notification: 'You logged into chrome website',
            date: '22-july-2023',
            
          },
        
      
      ];
      const navigate =useNavigate()
      const [loading,setLoading] = useState(false)

        const columns: TableColumn<any>[] = [
    
  
  
      {
        title: "Notification",
        accessor: "notification",
        render: (row) => <p>{row.notification}</p>,
      },
          
      {
        title: "Date",
        accessor: "date",
        render: (row) => <p>{row.date}</p>,
      },
          
    
  
      {
        title: "Actions",
        accessor: "actions",
        textAlign: "center",
        render: (row:any) => (
          <div className="flex gap-2 justify-start">
            <button type="button" onClick={() => navigate('detail')} className="btn btn-primary rounded-full">
                  Read More
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
                    <span>Notifications</span>
                </li>
            </ul>

			<div className="pt-5">

      <ExportDataTable
					columns={columns}
					data={data ?? []}
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
};

