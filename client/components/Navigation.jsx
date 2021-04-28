import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';

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
    // {
    //     text: 'Projects',
    //     href: '#projects',
    // },
    {
        text: 'Contact',
        href: 'mailto:thomasgormley415@gmail.com',
    },
];

const NavigationItems = (
    <div className="flex flex-col px-2 space-y-1 md:space-y-0 md:space-x-2 md:flex-row">
        {navItems.map((item) => (
            <Link href={item.href} key={item.text}>
                <a className="px-3 py-2 text-sm duration-300 ease-in-out bg-gray-900 rounded-md text-gray-50 md:hover:text-primary-400 md:bg-transparent hover:bg-gray-800 md:hover:bg-transparent md:hover:text-shadow-primary-sm">
                    {item.text}
                </a>
            </Link>
        ))}
    </div>
);

const Navigation = () => (
    <Disclosure as="nav" className="w-full h-auto">
        {({ open }) => (
            <>
                <div className="flex flex-row items-center justify-between w-full h-16 p-6 text-sm text-gray-50 font-poppins">
                    <h1 className="font-semibold tracking-widest uppercase duration-300 ease-in-out hover:text-primary-400 hover:text-shadow-primary-bright">
                        <Link href="/">THOMAS GORMLEY</Link>
                    </h1>

                    <Disclosure.Button className="inline-flex items-center justify-center w-10 h-10 p-2 duration-150 ease-in rounded-md md:hidden hover:bg-gray-700 text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-50 focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open navigation menu</span>
                        {open ? xIcon : menuIcon}
                    </Disclosure.Button>

                    {/* Nav Items for larger screens shown on header line */}
                    <div className="hidden px-2 py-3 space-y-1 md:block">{NavigationItems}</div>
                </div>

                {/* Mobile dropdown */}
                <Transition
                    show={open}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Disclosure.Panel as="div" className="block px-2 py-3 space-y-1 ease-in bg-transparent md:hidden">
                        {NavigationItems}
                    </Disclosure.Panel>
                </Transition>
            </>
        )}
    </Disclosure>
);
export default Navigation;
