import { Navigate } from 'react-router-dom';
import { storage } from '../utils';
import { useAppSelector } from '../redux/store/types';

export const AccountProtector = ({ element } : { element: JSX.Element }): JSX.Element => {
    const token = storage.getToken();

    const { userAccount } = useAppSelector((state) => state.user);

    if (!userAccount || userAccount === null) return <Navigate to={'/login'} />;

    if (!token) return <Navigate to={'/login'} />;

    return element;
};

export const RoleProtector = ({ element, role } : { element: JSX.Element, role: string }): JSX.Element => {
    const token = storage.getToken();

    const { userAccount } = useAppSelector((state) => state.user);

    if (!userAccount || userAccount === null) return <Navigate to={'/login'} />;

    if (!token) return <Navigate to={'/login'} />;

    if (!userAccount.realm_access.roles.includes(role)) return <Navigate to={'/login'} />;

    return element;
};
