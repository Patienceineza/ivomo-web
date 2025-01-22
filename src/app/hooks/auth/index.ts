import { delete_user, edit_user, get_users, login_user, register_user } from "../../api/auth";
import { AuthLoginPayload, User, UserPayload, UserType } from "../../types/auth";
import { addUser, removeUser } from "../../../core/redux/slices/user/userAccountSlice";
import { useAppDispatch, useAppSelector } from "../../../core/redux/store/types";
import { storage, userRedirect } from "../../../core/utils";
import { useState } from "react";
import { toast } from "react-hot-toast";
import jwt from 'jwt-decode';
import { PaginationType } from "../../types/shared";
import { useNavigate } from "react-router-dom";
import { assign_group } from "../../api/groups";

export const useLoginUser = () => {
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();
    const handleLogin = async (payload: AuthLoginPayload) => {
        try {
            setLoadingLogin(true);
            setError(null);
            const response = await login_user(payload);
            const { accessToken } = await response;
            storage.setToken(accessToken.access_token);
            const user = jwt(accessToken.access_token);
            const type_user = user as User
            dispatch(addUser(type_user));
            setError(null);

            

            console.log(type_user);

            userRedirect(type_user.realm_access.roles);
        } catch (error: any) {
            setError(error.response.message);
        } finally {
            setLoadingLogin(false);
        }
    };

    return {
        loadingLogin,
        handleLogin,
        error
    };
};

export const useCreateUser = () => {
    const [loadingCreate, setLoadingCreate] = useState(false);
    const navigate = useNavigate();
    const handleCreate = async (payload: UserPayload) => {
        try {
            setLoadingCreate(true);
            await register_user(payload).then(() => navigate('/admin/user'));
        } catch (error: any) {
            toast.error(error.response.message || 'Something went wrong.')
        } finally {
            setLoadingCreate(false);
        }
    };

    return {
        loadingCreate,
        handleCreate,
    };
};

export const useEditUser = () => {
    const [loadingEdit, setLoadingEdit] = useState(false);
    const handleEdit = async (payload: UserPayload, selected: UserType) => {
        try {
            setLoadingEdit(true);
            await edit_user(payload, selected);
        } catch (error: any) {
            toast.error(error.response.message || 'Something went wrong.')
        } finally {
            setLoadingEdit(false);
        }
    };

    return {
        loadingEdit,
        handleEdit,
    };
};

export const useDeleteUser = () => {
    const [loadingDelete, setLoadingDelete] = useState(false);
    const handleDelete = async (id: string) => {
        try {
            setLoadingDelete(true);
            await delete_user(id);
        } catch (error: any) {
            toast.error(error.response.message || 'Error Occurred')
        } finally {
            setLoadingDelete(false);
        }
    };

    return {
        loadingDelete,
        handleDelete,
    };
};

export const useLogout = () => {
    const [loadingLogout, setLoadingLogout] = useState(false);
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        try {
            setLoadingLogout(true);
            storage.removeToken();
            dispatch(removeUser());
            // window.location.href = '/login';
            // toast.success('Logged Out');
        } catch (error) {
            toast.error('Logout Failed');
        } finally {
            setLoadingLogout(false);
        }
    };

    return {
        loadingLogout,
        handleLogout
    };
};

export const useGetAllUsers = () => {
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [users, setUsers] = useState<PaginationType<UserType> | null>(null);
    const handleGetUsers = async (query?: string) => {
        try {
            setLoadingUsers(true);
            const data: PaginationType<UserType> = await get_users(query);
            setUsers(data);
        } catch (error: any) {
            toast.error(error.response.message);
        } finally {
            setLoadingUsers(false);
        }
    };

    return {
        loadingUsers,
        users,
        handleGetUsers
    };  
};
