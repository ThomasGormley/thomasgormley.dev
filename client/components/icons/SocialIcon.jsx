import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 5 * (i * 0.125),
            type: 'spring',
            duration: 4,
            damping: 6,
        },
    }),
};

const SocialIcon = ({ title, href, icon, size, colour, hoverColour, index }) => (
    <motion.span
        custom={index}
        initial="hidden"
        animate="visible"
        variants={variants}
        className={`w-${size} h-${size} ${colour} ${hoverColour} filter duration-150 cursor-pointer transform hover:-translate-y-1`}
    >
        <Link href={href}>
            <a title={title} href={href}>
                {icon}
            </a>
        </Link>
    </motion.span>
);

SocialIcon.defaultProps = {
    colour: 'text-gray-50',
};
export default SocialIcon;
