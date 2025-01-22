// hooks/useCompetitions.ts

import { useState } from 'react';
import toast from 'react-hot-toast';
import { createCompetition, getCompetitions, updateCompetition, deleteCompetition } from '../../competitions';
import { CompetitionPayload, CompetitionType } from '../../types/shared';

export const useCreateCompetition = () => {
    const [loadingCreate, setLoadingCreate] = useState(false);

    const handleCreate = async (payload: CompetitionPayload) => {
        try {
            setLoadingCreate(true);
            await createCompetition(payload);
            toast.success('Competition created successfully!');
        } catch (error: any) {
            toast.error(error.response?.message || 'Failed to create competition.');
        } finally {
            setLoadingCreate(false);
        }
    };

    return { loadingCreate, handleCreate };
};

export const useGetCompetitions = () => {
    const [loading, setLoading] = useState(false);
    const [competitions, setCompetitions] = useState<CompetitionType[]>([]);

    const handleGetCompetitions = async (query?: string) => {
        try {
            setLoading(true);
            const data :any= await getCompetitions(query);
            setCompetitions(data.data);
        } catch (error: any) {
            toast.error(error.response?.message || 'Failed to fetch competitions.');
        } finally {
            setLoading(false);
        }
    };

    return { loading, competitions, handleGetCompetitions };
};

export const useUpdateCompetition = () => {
    const [loadingUpdate, setLoadingUpdate] = useState(false);

    const handleUpdate = async (id: string, payload: CompetitionPayload) => {
        try {
            setLoadingUpdate(true);
            await updateCompetition(id, payload);
            toast.success('Competition updated successfully!');
        } catch (error: any) {
            toast.error(error.response?.message || 'Failed to update competition.');
        } finally {
            setLoadingUpdate(false);
        }
    };

    return { loadingUpdate, handleUpdate };
};

export const useDeleteCompetition = () => {
    const [loadingDelete, setLoadingDelete] = useState(false);

    const handleDelete = async (id: string) => {
        try {
            setLoadingDelete(true);
            await deleteCompetition(id);
            toast.success('Competition deleted successfully!');
        } catch (error: any) {
            toast.error(error.response?.message || 'Failed to delete competition.');
        } finally {
            setLoadingDelete(false);
        }
    };

    return { loadingDelete, handleDelete };
};
