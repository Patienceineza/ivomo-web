// hooks/useBooks.ts
import { useState } from "react";
import toast from "react-hot-toast";

import { BookPayload, BookType, CompetitionType, PaginationType } from "../../types/shared";
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../../api/books";
import { getCompetition } from "../../competitions";

export const useCreateBook = () => {
    const [loadingCreate, setLoadingCreate] = useState(false);

    const handleCreate = async (payload: BookPayload) => {
        try {
            setLoadingCreate(true);
            await createBook(payload);
            toast.success("Book created successfully!");
        } catch (error: any) {
            toast.error(error.response.message || 'Something went wrong.');
        } finally {
            setLoadingCreate(false);
        }
    };

    return {
        loadingCreate,
        handleCreate,
    };
};

export const useGetAllBooks = () => {
    const [loadingBooks, setLoadingBooks] = useState(false);
    const [books, setBooks] = useState< BookType | any>(null);

    const handleGetBooks = async (query?: string) => {
        try {
            setLoadingBooks(true);
            const data: PaginationType<BookType> = await getAllBooks(query);
            setBooks(data);
        } catch (error: any) {

        
        } finally {
            setLoadingBooks(false);
        }
    };

    return {
        loadingBooks,
        books,
        handleGetBooks,
    };
};

export const useUpdateBook = () => {
    const [loadingUpdate, setLoadingUpdate] = useState(false);

    const handleUpdate = async (id: string, payload: BookPayload) => {
        try {
            setLoadingUpdate(true);
            await updateBook(id, payload);
            toast.success("Book updated successfully!");
        } catch (error: any) {
            toast.error(error.response.message || 'Something went wrong.');
        } finally {
            setLoadingUpdate(false);
        }
    };

    return {
        loadingUpdate,
        handleUpdate,
    };
};

export const useDeleteBook = () => {
    const [loadingDelete, setLoadingDelete] = useState(false);

    const handleDelete = async (id: string) => {
        try {
            setLoadingDelete(true);
            await deleteBook(id);
            toast.success("Book deleted successfully!");
        } catch (error: any) {
            toast.error(error.response.message || 'Something went wrong.');
        } finally {
            setLoadingDelete(false);
        }
    };

    return {
        loadingDelete,
        handleDelete,
    };
};

export const useGetBookById = () => {
    const [loadingBook, setLoadingBook] = useState(false);
    const [book, setBook] = useState<BookType | null>(null);

    const handleGetBookById = async (id: string) => {
        try {
            setLoadingBook(true);
            const data: any = await getBookById(id);
            setBook(data.data);
        } catch (error: any) {
           
        } finally {
            setLoadingBook(false);
        }
    };

    return {
        loadingBook,
        book,
        handleGetBookById,
    };
};

export const useGetCompetition = () => {
    const [loading, setLoading] = useState(false);
    const [competition, setCompetition] = useState<CompetitionType | null>(null);

    const handleGetCompetition = async (id: string) => {
        try {
            setLoading(true);
            const data:any = await getCompetition(id);
            setCompetition(data.data);
        } catch (error: any) {
            toast.error(error.response?.message || 'Failed to fetch competition.');
        } finally {
            setLoading(false);
        }
    };

    return { loading, competition, handleGetCompetition };
};
