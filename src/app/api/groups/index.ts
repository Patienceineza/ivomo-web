import { AxiosErrorHandler, CustomError } from '../../../core/utils';
import { PRIVATE_API } from '../../../config/axios';
import { queryString } from '../../../core/utils';
import { PaginationType } from '../../types/shared';
import { GroupPayLoad, GroupType } from '../../types/group';


export const create_group = async (
    groupPayload: GroupPayLoad
): Promise<any> => {
    try {
        const request = await PRIVATE_API.post('/group', groupPayload);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const assign_group = async (userId: string, groupId: string): Promise<void> => {
    try {
        await PRIVATE_API.post('/user/group', {
            userId,
            groupId
        });
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const delete_group = async (id: string): Promise<void> => {
    try {
        const request = await PRIVATE_API.delete(`/group/${id}`);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const get_groups = async (query? : string): Promise<PaginationType<GroupType>> => {
    try {
        const request = await PRIVATE_API.get(`/group${queryString(query)}`);
        return await request.data;
    } catch (error) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const edit_group = async (
    groupPayload: GroupPayLoad,
    selected: GroupType
): Promise<any> => {
    try {
        const request = await PRIVATE_API.patch(`/group/${selected.id}`, groupPayload);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};