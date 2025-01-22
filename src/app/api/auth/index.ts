import { UserType, AuthLoginPayload, UserPayload } from '../../types/auth';
import { AxiosErrorHandler, CustomError } from '../../../core/utils';
import { PRIVATE_API } from '../../../config/axios';
import { queryString, searchString } from '../../../core/utils';
import { PaginationType } from '../../types/shared';

export type RegisterUserPayload = {
    access_token: string;
};

export type LoginUserPayload = {
    access_token: string;
};

export const register_user = async (
    memberPayload: UserPayload
): Promise<any> => {
    try {
        const request = await PRIVATE_API.post('/user', memberPayload);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const edit_user = async (
    memberPayload: UserPayload,
    selected: UserType
): Promise<any> => {
    try {
        const request = await PRIVATE_API.patch(`/user/${selected.id}`, {
            email: memberPayload.email === '' ? selected.email : memberPayload.email,
            username: memberPayload.username === '' ? selected.username : memberPayload.username,
            firstName: memberPayload.firstName === '' ? selected.lastName : memberPayload.firstName,
            lastName: memberPayload.lastName === '' ? selected.lastName : memberPayload.lastName,
        } as UserPayload);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const check_user = async (): Promise<UserType | any> => {
    try {
        const request = await PRIVATE_API.get('/user/check');
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const delete_user = async (id: string): Promise<UserType | any> => {
    try {
        const request = await PRIVATE_API.delete(`/user/${id}`);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const get_users = async (query? : string): Promise<PaginationType<UserType>> => {
    try {
        const request = await PRIVATE_API.get(`/user${queryString(query)}`);
        return await request.data;
    } catch (error) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};


export const login_user = async (
    userCredentials: AuthLoginPayload
): Promise<LoginUserPayload | any> => {
    try {
        const request = await PRIVATE_API.post('/user/login', userCredentials);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};
