// api/books.ts
import { PRIVATE_API } from '../../../config/axios';
import { AxiosErrorHandler, CustomError, queryString } from '../../../core/utils';
import { BookPayload, BookType } from "../../types/shared";
import { PaginationType } from '../../types/shared';

export const createBook = async (bookPayload: BookPayload): Promise<any> => {
    try {
        const request = await PRIVATE_API.post('/books', bookPayload);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const getAllBooks = async (query?: string): Promise<PaginationType<BookType>> => {
    try {
        const request = await PRIVATE_API.get(`/books${queryString(query)}`);
        return await request.data;
    } catch (error) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const updateBook = async (id: string, bookPayload: BookPayload): Promise<any> => {
    try {
        const request = await PRIVATE_API.put(`/books/${id}`, bookPayload);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const deleteBook = async (id: string): Promise<void> => {
    try {
        await PRIVATE_API.delete(`/books/${id}`);
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};

export const getBookById = async (id: string): Promise<BookType> => {
    try {
        const request = await PRIVATE_API.get(`/books/${id}`);
        return await request.data;
    } catch (error: any) {
        throw new CustomError(AxiosErrorHandler(error));
    }
};
