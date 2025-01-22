import { AxiosErrorHandler, CustomError } from '../../../core/utils';
import { PRIVATE_API } from '../../../config/axios';
import { queryString } from '../../../core/utils';
import { PaginationType } from '../../types/shared';
import { RolePayLoad, RoleType } from '../../types/roles';


export const create_role = async (
    groupPayload: RolePayLoad
): Promise<any> => {
    try {
        const request = await PRIVATE_API.post('/role', groupPayload);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const assign_role = async (groupId: string, roleIds: string[]): Promise<void> => {
    try {
        await PRIVATE_API.post('/group/assign-roles', {
            groupId,
            roleIds
        });
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const delete_role = async (id: string): Promise<void> => {
    try {
        const request = await PRIVATE_API.delete(`/role/${id}`);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const get_role = async (query? : string): Promise<PaginationType<RoleType>> => {
    try {
        const request = await PRIVATE_API.get(`/role${queryString(query)}`);
        return await request.data;
    } catch (error) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const edit_role = async (
    rolePayload: RolePayLoad,
    selected: RoleType
): Promise<any> => {
    try {
        const request = await PRIVATE_API.patch(`/role/${selected.id}`, {
            name: rolePayload.name === '' ? selected.name : rolePayload.name,
            description: rolePayload.description === '' ? selected.description : rolePayload.description,
        } as RolePayLoad);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};