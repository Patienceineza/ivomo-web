import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../../../../../core/redux/store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { useState, useEffect } from 'react';
import IconCaretsDown from '../../../../Icon/IconCaretsDown';
import IconCaretDown from '../../../../Icon/IconCaretDown';
import IconMenuDashboard from '../../../../Icon/Menu/IconMenuDashboard';
import IconMenuCharts from '../../../../Icon/Menu/IconMenuCharts';
import logo from '../../../../../assets/images/lo.png';

import { BellIcon, ChartBarIcon, ChartBarSquareIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useAppDispatch, useAppSelector } from '../../../../../core/redux/store/types';

const Sidebar = () => {
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const themeConfig = useAppSelector((state) => state.themeConfig);
    const semidark = useAppSelector((state) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useAppDispatch();
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    console.log(location.pathname)

    const navigation = [
        {
            name: 'Dashboard',
            to: '/admin',
            icon: HomeIcon,
            current: location.pathname === '/admin',
        },
        {
            name: 'Notifications',
            to: '/admin/notifications',
            icon: BellIcon,
            current: location.pathname === '/admin/notifications',
        },
        {
            name: 'Reports',
            to: '/admin/reports',
            icon: ChartBarSquareIcon,
            current: location.pathname === '/admin/reports',
        },
    ];

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <div className={'dark'}>
            <nav
                className={`sidebar capitalize fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-4 py-3">
                        <Link to="/" className="main-logo flex  flex-col items-center shrink-0">

                            <p className="text-xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light"> INFO<span className='text-primary'>CROSS</span></p>
                        </Link>

                        <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <div className="h-10"></div>
                    <PerfectScrollbar className="h-[calc(100vh)] relative">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                            <li className="nav-item">
                                <ul>
                                    {navigation.map((item, index) => (
                                        <li key={index} className="nav-item">
                                            <Link to={item.to} className={`group ${item.current ? 'active text-primary' : ' '}`}>
                                                <div className="flex items-center">
                                                    <item.icon className="group-hover:!text-primary shrink-0" />
                                                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#a3a3a3] dark:group-hover:text-white-dark">{item.name}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                    {ItemDropDown(currentMenu, toggleMenu, {
                                        name: 'Admin Panel',
                                        Icon: UsersIcon,
                                        items: [
                                            { name: "User management", to: "user" },
                                            { name: "Group management", to: "group" },
                                            { name: "Role management", to: "role" },
                                            {
                                                name: "Creditor management",
                                                to: "creditor",
                                            },
                                        ]
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;

type DropDownProps = {
	items: {
		name: string;
		to: string;
	}[];
	name: string;
	Icon: React.ForwardRefExoticComponent<
		Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
			title?: string | undefined;
			titleId?: string | undefined;
		} & React.RefAttributes<SVGSVGElement>
	>;
};


function ItemDropDown(currentMenu: string, toggleMenu: (value: string) => void, item: DropDownProps) {
    return (
        <li className="menu nav-item">
            <button type="button" className={`${currentMenu === item.name ? '' : ''} nav-link group w-full`} onClick={() => toggleMenu(item.name)}>
                <div className="flex items-center">
                    <item.Icon className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#a3a3a3] dark:group-hover:text-white-dark">Admin Panel</span>
                </div>

                <div className={currentMenu !== item.name ? 'rtl:rotate-90 -rotate-90' : ''}>
                    <IconCaretDown />
                </div>
            </button>

            <AnimateHeight duration={300} height={currentMenu === item.name ? 'auto' : 0}>
                <ul className="sub-menu text-gray-500">
                    {item.items.map((item, index) => (
                        <li key={index}>
                            <Link to={item.to}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </AnimateHeight>
        </li>
    );
}
