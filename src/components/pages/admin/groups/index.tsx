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
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { get_groups } from "../../../../app/api/groups";
import { GroupPayLoad, GroupType } from "../../../../app/types/group";
import toast from "react-hot-toast";
import { Loader } from "@mantine/core";
import IconTrash from "../../../Icon/IconTrash";
import { Form } from "../../../app_components/form";
import { z } from "zod";
import { useAssignGroup, useCreateGroup, useDeleteGroup, useEditGroup, useGetAllGroups } from "../../../../app/hooks/groups";
import { RoleType } from "../../../../app/types/roles";
import { get_role } from "../../../../app/api/roles";
import { useAssignRole } from "../../../../app/hooks/roles";

const schema = z.object({
    name: z.string().min(1, { message: 'Name is Required' }),
});


export default function GroupManagement() {
	const navigate = useNavigate();
	const [showAssign, setShowAssign] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
	const [selected, setSelected] = useState({} as GroupType);
	const [role, setRole] = useState([] as RoleType[]);
	const [selectedRoles, setSelectedRoles] = useState<RoleType[]>([]);
	const location = useLocation();
	const query = location.search;
	const { handleGetGroups, groups, loadingGroups } = useGetAllGroups();
	const { handleAssign, loadingAssign } = useAssignRole();
	const { handleDelete, loadingDelete } = useDeleteGroup();
	const { handleEdit, loadingEdit } = useEditGroup();
    const { handleCreate, loadingCreate } = useCreateGroup();

	const get_roles = async () => {
		try {
			const group_role = await get_role();
			setRole(group_role.list);
		} catch (error) {
			toast.error("Failed to fetch groups");
		}
	};

	const assignRole = () => {
		if (selectedRoles.length != 0) {
			handleAssign(selected.id, selectedRoles.map((t) => t.id)).then(() => {
				setShowAssign(false);
			});
		} else {
			toast.error('Please select Roles(s)')
		}
	};

	const handleRemoveItem = (id: string) => {
		const updatedSelectedRoles = selectedRoles.filter((item) => item.id !== id);
		setSelectedRoles(updatedSelectedRoles);
	};

	const handleAddItem = (selected: RoleType) => {

		if (!selectedRoles.some((item) => item.id === selected.id)) {
		  setSelectedRoles([...selectedRoles, selected]);
		}
	};

	const deleteGroup = () => {
		handleDelete(selected.id).then(() => {
			setShowDelete(false);
		});
	};

	const editGroup = (data: GroupPayLoad) => {
		handleEdit(data, selected).then(() => {
			setShowEdit(false);
		});
	};

	useEffect(() => {
		handleGetGroups(query);
		get_roles();
	}, [loadingAssign,loadingCreate, loadingDelete, loadingEdit, query]);

	const columns: TableColumn<GroupType>[] = [
		{
			title: "Name",
			accessor: "name",

			render: (row) => <p>{row.name}</p>,
		},
		{
			title: "Path",
			accessor: "path",
			render: (row) => <p>{row.path}</p>,
		},
		{
			title: "Actions",
			accessor: "actions",
			textAlign: "center",
			render: (row) => (
				<div className="flex gap-2 justify-start">
					<button
						onClick={() => {
							setShowAssign(true);
							setSelected(row);
						}}
						title="Assign Role"
						className="btn btn-sm btn-info"
					>
						<UserGroupIcon className="w-3" />
					</button>
					<button
						onClick={() => {
							setShowDelete(true);
							setSelected(row);
						}}
						title="Delete Group"
						className="btn btn-sm btn-danger"
					>
						<IconTrash className="w-3" />
					</button>
					<button
						onClick={() => {
							setShowEdit(true);
							setSelected(row);
						}}
						title="Edit Group"
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
					<span>Group Management</span>
				</li>
			</ul>
			<div className="mt-5">
				<div className="flex flex-row justify-end items-center my-3">
					<button
						onClick={() => setShowCreate(true)}
						title="create user"
						className="btn btn-primary btn-md"
					>
						Create Group
					</button>
				</div>
				<ExportDataTable
					columns={columns}
					data={groups?.list ?? []}
					total={groups?.total ?? 0}
					currentPage={groups?.currentPage ?? 0}
					nextPage={groups?.nextPage ?? 0}
					previousPage={groups?.previousPage ?? 0}
					lastPage={groups?.lastPage ?? 0}
					isLoading={loadingGroups}
				/>
			</div>
            {/* // assign role to group modal */}
			<Modal show={showAssign} setShow={setShowAssign} title="Assign Role">
				<div className="">
					<div className="py-2 border-y flex gap-1 dark:border-slate-600">
						Assign <p className="font-bold text-primary">{selected.name}</p>{" "}
						a role
					</div>
					<div className="py-1 pt-3">
						<div className="dropdown">
							<Dropdown
								placement="bottom-end"
								btnClassName="btn w-full justify-between btn-outline-primary btn-sm dropdown-toggle"
								button={
									<>
										<p className="">
											Select Group
										</p>
										<span>
											<ChevronDownIcon className="w-5" />
										</span>
									</>
								}
							>
								<ul className="!min-w-[170px] z-[9999]">
									{role.map((group, index) => (
										<li onClick={() => handleAddItem(group)} key={index}>
											<button type="button">{group.name}</button>
										</li>
									))}
								</ul>
							</Dropdown>
						</div>
						<div className="flex flex-col mt-2 gap-2 overflow-y-scroll max-h-64 scrollbar-hidden">
							{selectedRoles.map((rol, index) => (
								<div key={index} className="p-2 text-sm flex flex-row justify-between border border-primary/30">
									{rol.name}

									<XMarkIcon onClick={() => handleRemoveItem(rol.id)} className="w-3 text-red-500 cursor-pointer" />
								</div>
							))}
						</div>
						<div className="mt-3">
							<button
								onClick={assignRole}
								disabled={selectedRoles.length === 0}
								className="btn btn-primary"
							>
								{loadingAssign ? (
									<Loader
										size={20}
										color="4BC2C2"
										className="my-2 mx-2"
										variant="dots"
									/>
								) : (
									"Assign"
								)}
							</button>
						</div>
					</div>
				</div>
			</Modal>
            {/* // delete modal */}
			<Modal show={showDelete} setShow={setShowDelete} title="Delete Group">
				<div className="">
					<div className="py-2 capitalize border-y flex-wrap text-md flex gap-1 dark:border-slate-600">
						Confirm Delete{" "}
						<p className="font-bold text-primary">{selected.name}</p>
						Group?
					</div>
					<div className="py-1 flex items-center flex-col pt-3">
						<div className="mt-3">
							<button onClick={deleteGroup} className="btn btn-danger">
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
			<Modal show={showEdit} setShow={setShowEdit} title="Edit Group">
				<div className="">
					<Form<GroupPayLoad, typeof schema>
						onSubmit={(data:any) => editGroup(data)}
						schema={schema}
					>
						{({ register, formState }) => (
							<div className="space-y-5 text-gray-600">
                                <div>
                                    <label htmlFor="gridEmail">Group Name</label>
                                    <input
                                        id="gridEmail"
                                        type="text"
										placeholder="Group name"
                                        className="form-input"
                                        defaultValue={selected.name}
                                        {...register("name")}
                                    />
                                </div>
                                { formState.errors.name ? <p className=" text-red-600 text-sm italic">{formState.errors.name?.message}</p> : '' }
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
			<Modal show={showCreate} setShow={setShowCreate} title="Create Group">
				<div className="">
					<Form<GroupPayLoad, typeof schema>
						onSubmit={(data:any) => handleCreate(data).then(() => setShowCreate(false))}
						schema={schema}
					>
						{({ register, formState }) => (
							<div className="space-y-5 text-gray-600">
                                <div>
                                    <label htmlFor="gridEmail">Group Name</label>
                                    <input
                                        id="gridEmail"
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter Group Name"
                                        {...register("name")}
                                    />
                                </div>
                                { formState.errors.name ? <p className=" text-red-600 text-sm italic">{formState.errors.name?.message}</p> : '' }
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
