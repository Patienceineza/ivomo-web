import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../../core/redux/store/themeConfigSlice";
import { DataTable } from "mantine-datatable";
import { downloadExcel } from "react-export-table-to-excel";
import IconFile from "../../Icon/IconFile";
import IconPrinter from "../../Icon/IconPrinter";
import { useLocation, useNavigate } from "react-router-dom";

export type TableColumn<Entry> = {
	title: string;
	accessor: string;
	sortable?: boolean;
	textAlign?: string;
	render: (row: Entry, index: number) => ReactNode;
};

type DataTableProps<Entry> = {
	columns: TableColumn<Entry>[];
	data: Entry[];
	total: number;
	currentPage: number;
	nextPage: number;
	previousPage: number;
	lastPage: number;
	isLoading: boolean;
};

export default function ExportDataTable<Entry extends {}>(
	props: DataTableProps<Entry>
) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setPageTitle("Export Table"));
	});
	const PAGE_SIZES = [10, 20, 30, 50, 100];

	const [search, setSearch] = useState("");

	function handleDownloadExcel() {
		downloadExcel({
			fileName: "table",
			sheet: "react-export-table-to-excel",
			tablePayload: {
				header: props.columns.map((header) => header.accessor),
				body: props.data,
			},
		});
	}

	const exportTable = (type: any) => {
		let columns: any = props.columns.map((item) => item.accessor).filter((value) => value !== 'actions');
		let filename = "table";

		let newVariable: any;
		newVariable = window.navigator;

		if (type === "csv") {
			let coldelimiter = ";";
			let linedelimiter = "\n";
			let result = columns
				.map((d: any) => {
					return capitalize(d);
				})
				.join(coldelimiter);
			result += linedelimiter;
			// eslint-disable-next-line array-callback-return
			props.data.map((item: any, index: any) => {
				// eslint-disable-next-line array-callback-return
				columns.map((d: any, index: any) => {
					if (index > 0) {
						result += coldelimiter;
					}
					let val = item[columns[index]];
					result += val;
				});
				result += linedelimiter;
			});

			if (result == null) return;
			if (!result.match(/^data:text\/csv/i) && !newVariable.msSaveOrOpenBlob) {
				var data =
					"data:application/csv;charset=utf-8," + encodeURIComponent(result);
				var link = document.createElement("a");
				link.setAttribute("href", data);
				link.setAttribute("download", filename + ".csv");
				link.click();
			} else {
				var blob = new Blob([result]);
				if (newVariable.msSaveOrOpenBlob) {
					newVariable.msSaveBlob(blob, filename + ".csv");
				}
			}
		} else if (type === "print") {
			var rowhtml = "<p>" + filename + "</p>";
			rowhtml +=
				'<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
			// eslint-disable-next-line array-callback-return
			columns.map((d: any) => {
				rowhtml += "<th>" + capitalize(d) + "</th>";
			});
			rowhtml += "</tr></thead>";
			rowhtml += "<tbody>";

			// eslint-disable-next-line array-callback-return
			props.data.map((item: any) => {
				rowhtml += "<tr>";
				// eslint-disable-next-line array-callback-return
				columns.map((d: any, index: any) => {
					let val = item[columns[index]];
					console.log(val);
					rowhtml += "<td>" + val + "</td>";
				});
				rowhtml += "</tr>";
			});
			rowhtml +=
				"<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>";
			rowhtml += "</tbody></table>";
			var winPrint: any = window.open(
				"",
				"",
				"left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0"
			);
			winPrint.document.write("<title>Print</title>" + rowhtml);
			winPrint.document.close();
			winPrint.focus();
			winPrint.print();
		} else if (type === "txt") {
			let coldelimiter = ",";
			let linedelimiter = "\n";
			let result = columns
				.map((d: any) => {
					return capitalize(d);
				})
				.join(coldelimiter);
			result += linedelimiter;
			// eslint-disable-next-line array-callback-return
			props.data.map((item: any) => {
				// eslint-disable-next-line array-callback-return
				columns.map((d: any, index: any) => {
					if (index > 0) {
						result += coldelimiter;
					}
					let val = item[columns[index]];
					result += val;
				});
				result += linedelimiter;
			});

			if (result == null) return;
			if (!result.match(/^data:text\/txt/i) && !newVariable.msSaveOrOpenBlob) {
				var data1 =
					"data:application/txt;charset=utf-8," + encodeURIComponent(result);
				var link1 = document.createElement("a");
				link1.setAttribute("href", data1);
				link1.setAttribute("download", filename + ".txt");
				link1.click();
			} else {
				var blob1 = new Blob([result]);
				if (newVariable.msSaveOrOpenBlob) {
					newVariable.msSaveBlob(blob1, filename + ".txt");
				}
			}
		}
	};

	const capitalize = (text: any) => {
		return text
			.replace("_", " ")
			.replace("-", " ")
			.toLowerCase()
			.split(" ")
			.map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
			.join(" ");
	};

	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const [paginate, setPaginate] = useState({
		pageNumber: queryParams.get("pageNumber")
			? Number(queryParams.get("pageNumber"))
			: 1,
		pageSize: queryParams.get("pageSize")
			? Number(queryParams.get("pageSize"))
			: 10,
	});

	const updateQueryParams = (params: {
		pageNumber: number;
		pageSize: number;
	}) => {
		const searchParams = new URLSearchParams(location.search);
		searchParams.set("pageNumber", params.pageNumber.toString());
		searchParams.set("pageSize", params.pageSize.toString());
		searchParams.set("search", search.toString());
		const newSearch = searchParams.toString();
		navigate(`${location.pathname}?${newSearch}`);
	};

	function onClickFirstPage() {
		setPaginate((prev: any) => {
			return {
				...prev,
				pageNumber: 1,
			};
		});
	}

	function onClickLastPage() {
		setPaginate((prev: any) => {
			return {
				...prev,
				pageNumber: props.lastPage,
			};
		});
	}

	function onClickPage(page: number) {
		setPaginate((prev: any) => {
			return {
				...prev,
				pageNumber: page,
			};
		});
	}

	function onpageSizeChange(e: number) {
		setPaginate((prev: any) => {
			if (Number(e) >= props.total) {
				return {
					...prev,
					pageNumber: 1,
					pageSize: Number(e),
				};
			} else {
				return {
					...prev,
					pageSize: Number(e),
				};
			}
		});
	}

	useEffect(() => {
		updateQueryParams({
			pageNumber: paginate.pageNumber,
			pageSize: paginate.pageSize,
		});
	}, [paginate, search]);

	return (
		<div>
			<div className="panel">
				<div className="flex md:items-center justify-between md:flex-row flex-col mb-4.5 gap-5">
					<div className="flex items-center flex-wrap">
						<button
							type="button"
							onClick={() => exportTable("csv")}
							className="btn btn-primary btn-sm m-1 "
						>
							<IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
							CSV
						</button>
						<button
							type="button"
							onClick={() => exportTable("txt")}
							className="btn btn-primary btn-sm m-1"
						>
							<IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
							TXT
						</button>

						<button
							type="button"
							className="btn btn-primary btn-sm m-1"
							onClick={handleDownloadExcel}
						>
							<IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
							EXCEL
						</button>

						<button
							type="button"
							onClick={() => exportTable("print")}
							className="btn btn-primary btn-sm m-1"
						>
							<IconPrinter className="ltr:mr-2 rtl:ml-2" />
							PRINT
						</button>
					</div>

					<input
						type="text"
						className="form-input w-auto"
						placeholder="Search..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div className="datatables">
					<DataTable
						highlightOnHover
						className="whitespace-nowrap table-hover"
						records={props.data}
						fetching={props.isLoading}
						columns={[
							{
								title: "#",
								accessor: "",
								sortable: false,
								render: (_, index) => (
									<p>
										{paginate.pageSize * props.currentPage -
											paginate.pageSize +
											index +
											1}
									</p>
								),
							},
							...props.columns,
						]}
						totalRecords={props.total}
						recordsPerPage={paginate.pageSize}
						page={props.currentPage}
						onPageChange={(p) => onClickPage(p)}
						recordsPerPageOptions={PAGE_SIZES}
						onRecordsPerPageChange={(e) => onpageSizeChange(e)}
						minHeight={200}
						loaderSize="sm"
						loaderVariant="dots"
						loaderColor="#4BC2C2"
						loaderBackgroundBlur={2}
						paginationText={({ from, to, totalRecords }) =>
							`Showing  ${from} to ${to} of ${totalRecords} entries`
						}
					/>
					{/* <MantineReactTable table={table} /> */}
				</div>
			</div>
		</div>
	);
}
