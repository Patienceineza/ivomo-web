import { useState } from "react";
import { assign_group, create_group, delete_group, edit_group, get_groups } from "../../api/groups";
import toast from "react-hot-toast";
import { GroupPayLoad, GroupType } from "../../types/group";
import { PaginationType } from "../../types/shared";

export const useAssignGroup = () => {
    const [loadingAssign, setLoadingAssign] = useState(false);
    const handleAssign = async (userId: string, groupId: string) => {
        try {
            setLoadingAssign(true);
            await assign_group(userId, groupId);
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


export const useCreateGroup = () => {
    const [loadingCreate, setLoadingCreate] = useState(false);
    const handleCreate = async (payload: GroupPayLoad) => {
        try {
            setLoadingCreate(true);
            await create_group(payload);
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

export const useEditGroup = () => {
    const [loadingEdit, setLoadingEdit] = useState(false);
    const handleEdit = async (payload: GroupPayLoad, selected: GroupType) => {
        try {
            setLoadingEdit(true);
            await edit_group(payload, selected);
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

export const useDeleteGroup = () => {
    const [loadingDelete, setLoadingDelete] = useState(false);
    const handleDelete = async (id: string) => {
        try {
            setLoadingDelete(true);
            await delete_group(id);
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

export const useGetAllGroups = () => {
    const [loadingGroups, setLoadingGroups] = useState(false);
    const [groups, setGroups] = useState<PaginationType<GroupType> | null>(null);
    const handleGetGroups = async (query?: string) => {
        try {
            setLoadingGroups(true);
            const data: PaginationType<GroupType> = await get_groups(query);
            setGroups(data);
        } catch (error: any) {
            toast.error(error.response.message);
        } finally {
            setLoadingGroups(false);
        }
    };

    return {
        loadingGroups,
        groups,
        handleGetGroups
    };  
};
