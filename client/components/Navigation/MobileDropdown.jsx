import { Transition } from '@headlessui/react';
import { useRef } from 'react';
import useOnClickOutside from '../../lib/hooks/useOnClickOutside';

const MobileDropdown = ({ isOpen, setIsOpen, NavigationItems }) => {
    const menuRef = useRef();
    useOnClickOutside(menuRef, () => setIsOpen(false));
    return (
        <Transition
            show={isOpen}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <div className="block ease-in bg-transparent md:hidden" ref={menuRef}>
                <div className="px-2 space-y-1 ">{NavigationItems}</div>
            </div>
        </Transition>
    );
};

export default MobileDropdown;
