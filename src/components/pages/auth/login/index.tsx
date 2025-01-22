import { useEffect } from "react";
import IconLockDots from "../../../Icon/IconLockDots";
import IconMail from "../../../Icon/IconMail";
import {
	setPageTitle,
	toggleRTL,
} from "../../../../core/redux/store/themeConfigSlice";
import Logo from "../../../../assets/images/lo.png";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../../core/redux/store/types";
import { z } from "zod";
import { useLoginUser } from "../../../../app/hooks/auth";
import { AuthLoginPayload } from "../../../../app/types/auth";
import { Form } from "../../../app_components/form";
import toast, { LoaderIcon } from "react-hot-toast";

const schema = z.object({
	username: z.string().min(1, "Username is required"),
	password: z.string().min(1, "Password is required"),
});

const LoginBoxed = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setPageTitle("Login"));
	});

	const { loadingLogin, handleLogin, error } = useLoginUser();
	const defaultLoginPayload: AuthLoginPayload = {
		username: "",
		password: "",
	};

	return (
		<div>
			<div className="relative  min-h-screen items-start bg-gray-200  flex lfex-row justify-center items-centerpx-6 py-10 dark:bg-[#060818] sm:px-16">
				<div className="relative w-full max-w-[870px] rounded-md p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
					<div className="relative flex flex-col justify-start rounded-md bg-white/60  dark:bg-black/50 px-6 shadow-lg lg:min-h-[600px] py-10 pt-0">
						<div className="mx-auto w-full max-w-[440px]">
							<div className="flex flex-row justify-center items-center  w-full  my-10 ">
								<img src={Logo} alt="logo" className="w-[90px] " />
							</div>
							<div className="mb-3">
								<p className="text-2xl  uppercase font-extrabold !leading-snug text-primary ">
									Sign in
								</p>
								<p className="text-base font-bold leading-normal text-white-dark">
									Enter your email and password to login
								</p>
							</div>
							{error ? <p className="py-2 text-sm mt-1 text-red-600 italic">{error}</p> : ''}
							<Form
								schema={schema}
								onSubmit={handleLogin}
								options={{ defaultValues: defaultLoginPayload }}
								className="space-y-5 dark:text-white"
							>
								{({ register, formState }) => (
									<>
										<div>
											<label htmlFor="Email">Username</label>
											<div className="relative text-white-dark">
												<input
													id="Email"
													type="text"
													placeholder="Enter Username"
													className="form-input ps-10 placeholder:text-white-dark"
													{...register("username")}
													disabled={loadingLogin}
												/>
												<span className="absolute start-4 top-1/2 -translate-y-1/2">
													<IconMail fill={true} />
												</span>
											</div>
											<p className="text-sm mt-1 text-red-600 italic">
												{formState.errors.username &&
													formState.errors.username?.message}
											</p>
										</div>
										<div>
											<label htmlFor="Password">Password</label>
											<div className="relative text-white-dark">
												<input
													id="Password"
													type="password"
													placeholder="Enter Password"
													className="form-input ps-10 placeholder:text-white-dark"
													{...register("password")}
													disabled={loadingLogin}
												/>
												<span className="absolute start-4 top-1/2 -translate-y-1/2">
													<IconLockDots fill={true} />
												</span>
											</div>
											<p className="text-sm text-red-600 italic">
												{formState.errors.password &&
													formState.errors.password?.message}
											</p>
										</div>
										<button className="bg-primary p-2 flex items-center justify-center h-10 text-white text-md font-semibold rounded !mt-6 w-full border-0 uppercase hover:bg-opacity-75">
											{loadingLogin ? <LoaderIcon /> : "Sign In"}
										</button>
									</>
								)}
							</Form>

							{/* <div className="text-center mt-1 dark:text-white">
								Don't have an account ?&nbsp;
								<Link
									to="/signup"
									className="uppercase text-primary underline transition hover:text-black dark:hover:text-white"
								>
									SIGN UP
								</Link>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginBoxed;
