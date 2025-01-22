import { useState } from "react";
import toast from "react-hot-toast";
import { PaginationType } from "../../types/shared";
import { RolePayLoad, RoleType } from "../../types/roles";
import { assign_role, create_role, delete_role, edit_role, get_role } from "../../api/roles";

export const useAssignRole = () => {
    const [loadingAssign, setLoadingAssign] = useState(false);
    const handleAssign = async (userId: string, groupId: string[]) => {
        try {
            setLoadingAssign(true);
            await assign_role(userId, groupId);
        } catch (error: any) {
            toast.error(error.response.message || 'Error Occurred')
        } finally {
            setLoadingAssign(false);
        }
    };

    return {
        loadingAssign,
        handleAssign,
    };
};


export const useCreateRole = () => {
    const [loadingCreate, setLoadingCreate] = useState(false);
    const handleCreate = async (payload: RolePayLoad) => {
        try {
            setLoadingCreate(true);
            await create_role(payload);
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

export const useEditRole = () => {
    const [loadingEdit, setLoadingEdit] = useState(false);
    const handleEdit = async (payload: RolePayLoad, selected: RoleType) => {
        try {
            setLoadingEdit(true);
            await edit_role(payload, selected);
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

export const useDeleteRole = () => {
    const [loadingDelete, setLoadingDelete] = useState(false);
    const handleDelete = async (id: string) => {
        try {
            setLoadingDelete(true);
            await delete_role(id);
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

export const useGetAllRoles = () => {
    const [loadingRoles, setLoadingRoles] = useState(false);
    const [roles, setRoles] = useState<PaginationType<RoleType> | null>(null);
    const handleGetRoles = async (query?: string) => {
        try {
            setLoadingRoles(true);
            const data: PaginationType<RoleType> = await get_role(query);
            setRoles(data);
        } catch (error: any) {
            toast.error(error.response.message);
        } finally {
            setLoadingRoles(false);
        }
    };

    return {
        loadingRoles,
        roles,
        handleGetRoles
    };  
};
