import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../core/redux/store/themeConfigSlice';

type Column = {
  accessor: string;
  title: string;
};

type TableData = Record<string, any>[];

type BasicDataTableProps = {
  title: string;
  columns: Column[];
  data: TableData;
};

export default function BasicDataTable(props: BasicDataTableProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Basic Table'));
  });

  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);

  const initialRecords = props.data.slice(0, pageSize);
  const [recordsData, setRecordsData] = useState(initialRecords);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecordsData(props.data.slice(from, to));
  }, [page, pageSize, props.data]);

  return (
    <div>
      <div className="panel mt-6">
        <h5 className="font-semibold text-lg dark:text-white-light mb-5">{props.title}</h5>
        <div className="datatables">
          <DataTable
            noRecordsText="No results match your search query"
            highlightOnHover
            className="whitespace-nowrap table-hover"
            records={recordsData}
            columns={props.columns}
            totalRecords={props.data.length}
            recordsPerPage={pageSize}
            page={page}
            onPageChange={(p) => setPage(p)}
            recordsPerPageOptions={PAGE_SIZES}
            onRecordsPerPageChange={setPageSize}
            minHeight={200}
            paginationText={({ from, to, totalRecords }) =>
              `Showing  ${from} to ${to} of ${totalRecords} entries`
            }
          />
        </div>
      </div>
    </div>
  );
}
