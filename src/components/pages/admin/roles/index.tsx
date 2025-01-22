import { useEffect, useState } from "react";
import ExportDataTable, {
	TableColumn,
} from "../../../app_components/datatables/ExportDataTable";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	useDeleteUser,
	useEditUser,
	useGetAllUsers,
} from "../../../../app/hooks/auth";
import Modal from "../../../app_components/modal";
import Dropdown from "../../../Dropdown";
import {
	ChevronDownIcon,
	PencilIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";
import { get_role } from "../../../../app/api/roles";
import toast from "react-hot-toast";
import { Loader } from "@mantine/core";
import IconTrash from "../../../Icon/IconTrash";
import { Form } from "../../../app_components/form";
import { z } from "zod";
import { useAssignRole, useCreateRole, useDeleteRole, useEditRole, useGetAllRoles } from "../../../../app/hooks/roles";
import { RolePayLoad, RoleType } from "../../../../app/types/roles";

const schema = z.object({
    name: z.string().min(1, { message: 'Name is Required' }),
    description: z.string().min(1, { message: 'Description is Required' })
});




export default function RoleManagement() {
	const [showDelete, setShowDelete] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
	const [selected, setSelected] = useState({} as RoleType);
	const location = useLocation();
	const query = location.search;
	const { handleGetRoles, roles, loadingRoles } = useGetAllRoles();
	const { handleDelete, loadingDelete } = useDeleteRole();
	const { handleEdit, loadingEdit } = useEditRole();
    const { handleCreate, loadingCreate } = useCreateRole();

	const deleteRole = () => {
		handleDelete(selected.id).then(() => {
			setShowDelete(false);
		});
	};

	const editRole = (data: RolePayLoad) => {
		handleEdit(data, selected).then(() => {
			setShowEdit(false);
		});
	};

	useEffect(() => {
		handleGetRoles(query);
	}, [loadingCreate, loadingDelete, loadingEdit, query]);

	const columns: TableColumn<RoleType>[] = [
		{
			title: "Name",
			accessor: "name",

			render: (row) => <p>{row.name}</p>,
		},
		{
			title: "Description",
			accessor: "description",
			render: (row) => <p>{row.description}</p>,
		},
		{
			title: "Actions",
			accessor: "actions",
			textAlign: "center",
			render: (row) => (
				<div className="flex gap-2 justify-start">
					<button
						onClick={() => {
							setShowDelete(true);
							setSelected(row);
						}}
						title="Delete Role"
						className="btn btn-sm btn-danger"
					>
						<IconTrash className="w-3" />
					</button>
					<button
						onClick={() => {
							setShowEdit(true);
							setSelected(row);
						}}
						title="Edit Role"
						className="btn btn-sm btn-warning"
					>
						<PencilIcon className="w-3" />
					</button>
				</div>
			),
		},
	];

	return (
		<div>
			<ul className="flex space-x-2 rtl:space-x-reverse">
				<li>
					<Link to="/admin" className="text-primary hover:underline">
						Dashboard
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<span>Role Management</span>
				</li>
			</ul>
			<div className="mt-5">
				<div className="flex flex-row justify-end items-center my-3">
					<button
						onClick={() => setShowCreate(true)}
						title="create user"
						className="btn btn-primary btn-md"
					>
						Create Role
					</button>
				</div>
				<ExportDataTable
					columns={columns}
					data={roles?.list ?? []}
					total={roles?.total ?? 0}
					currentPage={roles?.currentPage ?? 0}
					nextPage={roles?.nextPage ?? 0}
					previousPage={roles?.previousPage ?? 0}
					lastPage={roles?.lastPage ?? 0}
					isLoading={loadingRoles}
				/>
			</div>
            {/* // delete modal */}
			<Modal show={showDelete} setShow={setShowDelete} title="Delete Role">
				<div className="">
					<div className="py-2 capitalize border-y flex-wrap text-md flex gap-1 dark:border-slate-600">
						Confirm Delete{" "}
						<p className="font-bold text-primary">{selected.name}</p>
						Role?
					</div>
					<div className="py-1 flex items-center flex-col pt-3">
						<div className="mt-3">
							<button onClick={deleteRole} className="btn btn-danger">
								{loadingDelete ? (
									<Loader
										size={20}
										color="4BC2C2"
										className="my-2 mx-2"
										variant="dots"
									/>
								) : (
									"Confirm"
								)}
							</button>
						</div>
					</div>
				</div>
			</Modal>
            {/* // edit modal */}
			<Modal show={showEdit} setShow={setShowEdit} title="Edit Role">
				<div className="">
					<Form<RolePayLoad, typeof schema>
						onSubmit={(data) => editRole(data)}
						schema={schema}
					>
						{({ register, formState }) => (
							<div className="space-y-5 text-gray-600">
                                <div>
                                    <label htmlFor="gridEmail">Role Name</label>
                                    <input
                                        id="gridEmail"
                                        type="text"
                                        className="form-input"
                                        defaultValue={selected.name}
                                        {...register("name")}
                                    />
                                </div>
                                { formState.errors.name ? <p className=" text-red-600 text-sm italic">{formState.errors.name?.message}</p> : '' }
                                <div>
                                    <label htmlFor="gridEmail">Description</label>
                                    <input
                                        id="gridEmail"
                                        type="text"
                                        className="form-input"
                                        defaultValue={selected.description}
                                        {...register('description')}
                                    />
                                </div>
                                { formState.errors.description ? <p className=" text-red-600 text-sm italic">{formState.errors.description?.message}</p> : '' }
								<button className="btn btn-primary !mt-6">
									{loadingEdit ? (
										<Loader
										size={20}
										color="4BC2C2"
										className="my-2 mx-2"
										variant="dots"
									/>
									) : (
										"Edit"
									)}
								</button>
							</div>
						)}
					</Form>
				</div>
			</Modal>
            {/* // create modal */}
			<Modal show={showCreate} setShow={setShowCreate} title="Create Role">
				<div className="">
					<Form<RolePayLoad, typeof schema>
						onSubmit={(data) => handleCreate(data).then(() => setShowCreate(false))}
						schema={schema}
					>
						{({ register, formState }) => (
							<div className="space-y-5 text-gray-600">
                                <div>
                                    <label htmlFor="gridEmail">Role Name</label>
                                    <input
                                        id="gridEmail"
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter Role Name"
                                        {...register("name")}
                                    />
                                </div>
                                { formState.errors.name ? <p className=" text-red-600 text-sm italic">{formState.errors.name?.message}</p> : '' }
                                <div>
                                    <label htmlFor="gridEmail">Description</label>
                                    <input
                                        id="gridEmail"
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter Role Description"
                                        {...register('description')}
                                    />
                                </div>
                                { formState.errors.description ? <p className=" text-red-600 text-sm italic">{formState.errors.description?.message}</p> : '' }
								<button className="btn btn-primary !mt-6">
									{loadingCreate ? (
										<Loader
										size={20}
										color="4BC2C2"
										className="my-2 mx-2"
										variant="dots"
									/>
									) : (
										"Create"
									)}
								</button>
							</div>
						)}
					</Form>
				</div>
			</Modal>
		</div>
	);
}
