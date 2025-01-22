import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../../../../core/redux/store/themeConfigSlice';
import img from '../../../../assets/images/Screenshot 2023-10-12 at 18.55.05.png'
import imgLight  from '../../../../assets/images/Screenshot 2023-10-12 at 19.01.27.png'
import { useAppDispatch, useAppSelector } from '../../../../core/redux/store/types';


const Error500 = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Error 500'));
    });
    const isDark = useAppSelector((state) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
            <div className="ppx-6 py-16 text-center font-semibold before:container before:absolute before:left-1/2 before:-translate-x-1/2 before:rounded-full before:bg-[linear-gradient(180deg,#4BC2C2_0%,rgba(67,97,238,0)_50.73%)] before:aspect-square before:opacity-10 md:py-20">
                <div className="relative">
                    <img
                        src={isDark ? imgLight : img}
                        alt="500"
                        className="mx-auto -mt-10 w-full max-w-xs object-cover md:-mt-14 md:max-w-xl"
                    />
                    <p className="mt-5 text-base dark:text-white">Internal server error!</p>
                    <Link to="/login" className="btn bg-primary text-white  mx-auto !mt-7 w-max border-0 uppercase shadow-none">
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error500;
