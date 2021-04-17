import Link from 'next/link';

const SocialIcon = ({ title, href, icon, size, colour, hoverColour }) => (
    <span
        className={`w-${size} h-${size} ${colour} ${hoverColour} duration-150 cursor-pointer transform hover:-translate-y-1`}
    >
        <Link href={href}>
            <a title={title} href={href}>
                {icon}
            </a>
        </Link>
    </span>
);

SocialIcon.defaultProps = {
    colour: 'text-gray-50',
};
export default SocialIcon;
