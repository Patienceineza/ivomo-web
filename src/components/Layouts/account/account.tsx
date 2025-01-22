import { Outlet } from 'react-router-dom';
import { CheckUser } from '../../../core/utils/checkuser';
import { useAppSelector } from '../../../core/redux/store/types';

export const AccountLayout = () => {

    CheckUser();

    return (
        <>
            <main className="">
                <Outlet />
            </main>
        </>
    );
};