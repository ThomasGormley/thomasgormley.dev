import { useState } from 'react';
import Link from 'next/link';
// import { Transition } from '@headlessui/react';
import MobileDropdown from './MobileDropdown';

const menuIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
);

const xIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
    </svg>
);

const navItems = [
    {
        text: 'Portfolio',
        href: '/portfolio',
    },
    {
        text: 'Contact',
        href: '/contact',
    },
];

const NavigationItems = (
    <div className="flex flex-col px-2 space-y-1 md:space-y-0 md:space-x-2 md:flex-row">
        {navItems.map((item) => (
            <Link href={item.href} key={item.text}>
                <a className="px-3 py-2 text-sm duration-300 ease-in-out bg-gray-900 rounded-md text-gray-50 md:hover:text-primary-500 md:bg-transparent hover:bg-gray-800">
                    {item.text}
                </a>
            </Link>
        ))}
    </div>
);

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full h-auto">
            <div className="flex flex-row items-center justify-between w-full h-16 px-4 py-2 text-sm md:p-6 text-gray-50 font-poppins">
                <h1 className="font-semibold tracking-widest uppercase duration-300 ease-in-out hover:text-primary-500">
                    <Link href="/">THOMAS GORMLEY</Link>
                </h1>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center w-10 h-10 p-2 duration-150 ease-in rounded-md md:hidden hover:bg-gray-700 text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-50 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    <span className="sr-only">Open navigation</span>
                    {isOpen ? xIcon : menuIcon}
                </button>

                {/* Nav Items for larger screens shown on header line */}
                <div className="hidden px-2 pt-2 pb-3 space-y-1 md:block">{NavigationItems}</div>
            </div>

            <MobileDropdown isOpen={isOpen} setIsOpen={setIsOpen} NavigationItems={NavigationItems} />
        </nav>
    );
};
export default Navigation;
