import config from "../../config/storage";

export const storage = {
    getToken: () =>
        JSON.parse(
            window.localStorage.getItem(`${config.STORAGE_PREFIX}token`) as string
        ),
    setToken: (value: string) =>
        window.localStorage.setItem(
            `${config.STORAGE_PREFIX}token`,
            JSON.stringify(value)
        ),
    removeToken: () =>
        window.localStorage.removeItem(`${config.STORAGE_PREFIX}token`),
};
