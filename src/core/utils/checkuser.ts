import { useEffect } from 'react';
import { storage } from './storage';
import { check_user } from '../../app/api/auth';
import { useLogout } from '../../app/hooks/auth';
import { addUser } from '../redux/slices/user/userAccountSlice';
import { useAppDispatch } from '../redux/store/types';

export const CheckUser = () => {
    const token = storage.getToken();
    const dispatch = useAppDispatch();
    const { handleLogout } = useLogout();

    const fetchUser = async () => {
        if (token) {
            try {
                const user = await check_user();
                dispatch(addUser(user));
            } catch (error) {
                handleLogout();
            }
        } else {
            handleLogout();
        }
    };

    useEffect(() => {
        fetchUser();
    });
};
