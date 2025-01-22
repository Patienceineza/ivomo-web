// api/competitions.ts

import { PRIVATE_API } from "../../config/axios";
import { CustomError, AxiosErrorHandler } from "../../core/utils";
import { CompetitionPayload, CompetitionType } from "../types/shared";



export const createCompetition = async (payload: CompetitionPayload): Promise<CompetitionType> => {
    try {
        const response = await PRIVATE_API.post('/competitions', payload);
        return response.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const getCompetitions = async (query?: string): Promise<CompetitionType[]> => {
    try {
        const response = await PRIVATE_API.get(`/competitions${query ? `?${query}` : ''}`);
        return response.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const updateCompetition = async (id: string, payload: CompetitionPayload): Promise<CompetitionType> => {
    try {
        const response = await PRIVATE_API.put(`/competitions/${id}`, payload);
        return response.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const deleteCompetition = async (id: string): Promise<void> => {
    try {
        await PRIVATE_API.delete(`/competitions/${id}`);
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const getCompetition = async (id: string): Promise<CompetitionType> => {
    try {
        const response = await PRIVATE_API.get(`/competitions/${id}`);
        return response.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};
