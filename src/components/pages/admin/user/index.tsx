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
import { UserPayload, UserType } from "../../../../app/types/auth";
import Modal from "../../../app_components/modal";
import Dropdown from "../../../Dropdown";
import {
	ChevronDownIcon,
	PencilIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";
import { get_groups } from "../../../../app/api/groups";
import { GroupType } from "../../../../app/types/group";
import toast from "react-hot-toast";
import { Loader } from "@mantine/core";
import IconTrash from "../../../Icon/IconTrash";
import { Form } from "../../../app_components/form";
import { z } from "zod";
import { useAssignGroup } from "../../../../app/hooks/groups";

const schema = z.object({
    email: z.string().optional(),
    firstName: z.string().optional(),
	lastName: z.string().optional(),
	username: z.string().optional(),
    password: z.string().optional(),
});


export default function AdminUserManagement() {
	const navigate = useNavigate();
	const [showAssign, setShowAssign] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [selected, setSelected] = useState({} as UserType);
	const [groups, setGroups] = useState([] as GroupType[]);
	const [selectedGroup, setSelectedGroup] = useState<GroupType | undefined>();
	const location = useLocation();
	const query = location.search;
	const { handleGetUsers, users, loadingUsers } = useGetAllUsers();
	const { handleAssign, loadingAssign } = useAssignGroup();
	const { handleDelete, loadingDelete } = useDeleteUser();
	const { handleEdit, loadingEdit } = useEditUser();

	const get_group = async () => {
		try {
			const group = await get_groups();
			setGroups(group.list);
		} catch (error) {
			toast.error("Failed to fetch groups");
		}
	};

	const assignGroup = () => {
		if (selectedGroup) {
			handleAssign(selected.id, selectedGroup.id).then(() => {
				setShowAssign(false);
			});
		} else {
		}
	};

	const deleteUser = () => {
		handleDelete(selected.id).then(() => {
			setShowDelete(false);
		});
	};

	const editUser = (data: UserPayload) => {
		handleEdit(data, selected).then(() => {
			setShowEdit(false);
		});
	};

	useEffect(() => {
		handleGetUsers(query);
		get_group();
	}, [loadingAssign, loadingDelete, loadingEdit, query]);

	const columns: TableColumn<UserType>[] = [
		{
			title: "Name",
			accessor: "lastName",
			render: (row) => <p>{row.firstName} {row.lastName}</p>,
		},
		{
			title: "UserName",
			accessor: "username",

			render: (row) => <p>{row.username}</p>,
		},
		{
			title: "Email",
			accessor: "email",
			render: (row) => <p>{row.email}</p>,
		},
		
		{
			title: "Groups",
			accessor: "groups",

			render: (row) => (
				<div className="gap-1 flex flex-row">
					{row.groups.map((group, index) => (
						<span key={index} className="badge badge-outline-primary badge-sm">
							{group.name}
						</span>
					))}
				</div>
			),
		},
		{
			title: "Actions",
			accessor: "actions",
			textAlign: "center",
			render: (row) => (
				<div className="flex gap-2 justify-center">
					<button
						onClick={() => {
							setShowAssign(true);
							setSelected(row);
						}}
						title="Assign Group"
						className="btn btn-sm btn-info"
					>
						<UserGroupIcon className="w-3" />
					</button>
					<button
						onClick={() => {
							setShowDelete(true);
							setSelected(row);
						}}
						title="Delete User"
						className="btn btn-sm btn-danger"
					>
						<IconTrash className="w-3" />
					</button>
					<button
						onClick={() => {
							setShowEdit(true);
							setSelected(row);
						}}
						title="Edit User"
						className="btn btn-sm btn-warning"
					>
						<PencilIcon className="w-3" />
					</button>
				</div>
			),
		},
	];

	console.log(users?.list);
	
	const schema = z.object({
		email: z.string().email().min(1, { message: 'Email is required' }),
		firstName: z.string().min(1, { message: 'First Name is required' }),
		lastName: z.string().min(1, { message: 'Last Name is required' }),
		username: z.string().min(1, { message: 'UserName is required' }),

	});
	
	return (
		<div>
			<ul className="flex space-x-2 rtl:space-x-reverse">
				<li>
					<Link to="/admin" className="text-primary hover:underline">
						Dashboard
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<span>User Management</span>
				</li>
			</ul>
			<div className="mt-5">
				<div className="flex flex-row justify-end items-center my-3">
					<button
						onClick={() => navigate("new")}
						title="create user"
						className="btn btn-primary btn-md"
					>
						Create User
					</button>
				</div>
				<ExportDataTable
					columns={columns}
					data={users?.list ?? []}
					total={users?.total ?? 0}
					currentPage={users?.currentPage ?? 0}
					nextPage={users?.nextPage ?? 0}
					previousPage={users?.previousPage ?? 0}
					lastPage={users?.lastPage ?? 0}
					isLoading={loadingUsers}
				/>
			</div>
			<Modal show={showAssign} setShow={setShowAssign} title="Assign Group">
				<div className="">
					<div className="py-2 border-y flex gap-1 dark:border-slate-600">
						Assign <p className="font-bold text-primary">{selected.username}</p>{" "}
						to a group
					</div>
					<div className="py-1 pt-3">
						<div className="dropdown">
							<Dropdown
								placement="bottom-end"
								btnClassName="btn w-full justify-between btn-outline-primary btn-sm dropdown-toggle"
								button={
									<>
										<p className="">
											{selectedGroup ? selectedGroup.name : "Select Group"}{" "}
										</p>
										<span>
											<ChevronDownIcon className="w-5" />
										</span>
									</>
								}
							>
								<ul className="!min-w-[170px] z-[9999]">
									{groups.map((group, index) => (
										<li onClick={() => setSelectedGroup(group)} key={index}>
											<button type="button">{group.name}</button>
										</li>
									))}
								</ul>
							</Dropdown>
						</div>
						<div className="mt-3">
							<button
								onClick={assignGroup}
								disabled={selectedGroup === undefined}
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
			<Modal show={showDelete} setShow={setShowDelete} title="Delete User">
				<div className="">
					<div className="py-2 capitalize border-y flex-wrap text-md flex gap-1 dark:border-slate-600">
						Confirm Delete{" "}
						<p className="font-bold text-primary">{selected.username}</p>
						user?
					</div>
					<div className="py-1 flex items-center flex-col pt-3">
						<div className="mt-3">
							<button onClick={deleteUser} className="btn btn-danger">
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

			<Modal show={showEdit} setShow={setShowEdit} title="Edit User">
				<div className="">
					<Form<UserPayload, typeof schema>
						onSubmit={(data) => editUser(data)}
						schema={schema}
					>
						{({ register, formState }) => (
							<div className="space-y-5 text-gray-600">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<label htmlFor="gridEmail">Email</label>
										<input
											id="gridEmail"
											type="email"
											className="form-input"
											defaultValue={selected.email}
											{...register('email')}
											/>
											{ formState.errors.email ? <p className=" text-red-600 text-sm italic">{formState.errors.email?.message}</p> : '' }
									</div>
									<div>
										<label htmlFor="gridPassword">User Name</label>
										<input
											id="gridPassword"
											type="text"
											defaultValue={selected.username}
                                          placeholder="Username"
											className="form-input"
											{...register('username')}
											/>
											{ formState.errors.username ? <p className=" text-red-600 text-sm italic">{formState.errors.username?.message}</p> : '' }
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label htmlFor="email">First Name</label>
										<input
											type="text"
											defaultValue={selected.firstName}
										    placeholder="First Name"
											className="form-input"
											
											{...register('firstName')}
											/>
											{ formState.errors.firstName ? <p className=" text-red-600 text-sm italic">{formState.errors.firstName?.message}</p> : '' }
									</div>
									<div>
										<label htmlFor="phone">Last Name</label>
										<input
											type="text"
											placeholder="Last Name"
											defaultValue={selected.lastName}
											
											className="form-input"
											{...register('lastName')}
											/>
											{ formState.errors.lastName ? <p className=" text-red-600 text-sm italic">{formState.errors.lastName?.message}</p> : '' }
									</div>
								</div>
							
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
		</div>
	);
}
