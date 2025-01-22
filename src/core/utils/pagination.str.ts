export const paginationString = (
    pageNumber?: number,
    pageSize?: number
): string => `pageNumber=${pageNumber ?? 0}&pageSize=${pageSize ?? 10}`;

export const searchString = (keyword?: string): string =>
    `search=${keyword ?? null}`;

export type FilterObjectType = {
    pageNumber?: number;
    pageSize?: number;
    from?: string;
    to?: string;
    status?: string;
    locationId?: string;
    packageId?: string;
    userId?: string;
};

export const queryString = (query?: string): string => {
    return query ? `${query}` : '';
};
