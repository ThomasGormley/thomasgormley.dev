import Link from 'next/link';
import { useState } from 'react';

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
        text: 'LinkedIn',
        href: '#',
    },
    {
        text: 'Portfolio',
        href: '#',
    },
];

const NavigationItems = (
    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navItems.map((item) => (
            <li
                key="item"
                className="px-3 py-2 text-sm duration-300 ease-in-out bg-gray-900 rounded-md text-gray-50 hover:text-fuchsia-500"
            >
                <Link href={item.href}>{item.text}</Link>
            </li>
        ))}
    </ul>
);

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className={`w-full h-auto ${isOpen ? 'bg-gray-800' : 'bg-transparent'}`}>
            <div className="flex flex-row items-center content-center justify-between w-full h-auto px-4 py-2 text-sm md:p-6 text-gray-50 font-poppins">
                <h1 className="font-semibold tracking-widest uppercase duration-300 ease-in-out hover:text-fuchsia-500">
                    <Link href="/">THOMAS GORMLEY</Link>
                </h1>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 duration-150 ease-in rounded-md hover:bg-gray-700 text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-50 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    <span className="sr-only">Open navigation</span>
                    {isOpen ? xIcon : menuIcon}
                </button>
            </div>

            {isOpen && (
                <div className="block bg-gray-800 md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{NavigationItems}</div>
                </div>
            )}
        </nav>
    );
};
export default Navigation;
