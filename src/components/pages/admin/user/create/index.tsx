import { Link } from "react-router-dom";
import { z } from "zod";
import { Form } from "../../../../app_components/form";
import { UserPayload } from "../../../../../app/types/auth";
import { useCreateUser } from "../../../../../app/hooks/auth";
import IconLoader from "../../../../Icon/IconLoader";

const schema = z.object({
    email: z.string().email().min(1, { message: 'Email is required' }),
    firstName: z.string().min(1, { message: 'First Name is required' }),
	lastName: z.string().min(1, { message: 'Last Name is required' }),
	username: z.string().min(1, { message: 'UserName is required' }),
    password: z.string().min(1, { message: 'Password is Required' }),
});


export default function AdminCreateUser() {
	const { handleCreate, loadingCreate } = useCreateUser();

	return (
		<div>
			<ul className="flex space-x-2 rtl:space-x-reverse">
				<li>
					<Link to="/admin" className="text-primary hover:underline">
						Dashboard
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<Link to="/admin/user" className="text-primary hover:underline">
						User Management
					</Link>
				</li>
				<li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
					<span>Create User</span>
				</li>
			</ul>
			<div className="mt-5 panel">
				<Form<UserPayload, typeof schema>
						onSubmit={(data) => handleCreate(data)}
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
											placeholder="Enter Email"
											className="form-input"
											{...register('email')}
										/>
										{ formState.errors.email ? <p className=" text-red-600 text-sm italic">{formState.errors.email?.message}</p> : '' }
									</div>
									<div>
										<label htmlFor="gridPassword">User Name</label>
										<input
											id="gridPassword"
											type="text"
											placeholder="Enter User Name"
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
											placeholder="Enter First Name"
											defaultValue=""
											className="form-input"
											{...register('firstName')}
										/>
										{ formState.errors.firstName ? <p className=" text-red-600 text-sm italic">{formState.errors.firstName?.message}</p> : '' }
									</div>
									<div>
										<label htmlFor="phone">Last Name</label>
										<input
											type="text"
											placeholder="Enter Last Name"
											defaultValue=""
											className="form-input"
											{...register('lastName')}
										/>
										{ formState.errors.lastName ? <p className=" text-red-600 text-sm italic">{formState.errors.lastName?.message}</p> : '' }
									</div>
									
								</div>
								<div>
									<label htmlFor="gridAddress1">Password</label>
									<input
										id="gridAddress1"
										type="password"
										placeholder="Enter Password"
										{...register('password')}
										className="form-input"
									/>
									{ formState.errors.password ? <p className=" text-red-600 text-sm italic">{formState.errors.password?.message}</p> : '' }
								</div>
								<button className="btn btn-primary !mt-6">
									{loadingCreate ? <IconLoader className=" animate-spin mx-3" /> :'Submit'}
								</button>
							</div>
						)}
				</Form>
			</div>
		</div>
	);
}
