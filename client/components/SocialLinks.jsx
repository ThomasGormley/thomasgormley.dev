import { GitHub, SocialIcon, Spotify, Twitter } from './icons';
import config from '../lib/config';

const { twitter, github } = config.social;
const socialButtonData = [
    {
        title: 'Spotify',
        hoverColour: 'hover:text-[#1ED760]',
        href: '/spotify',
        icon: <Spotify />,
    },
    {
        title: 'GitHub',
        hoverColour: 'hover:text-[#C0C0C0]',
        href: github,
        icon: <GitHub />,
    },
    {
        title: 'Twitter',
        hoverColour: 'hover:text-[#1DA1F2]',
        href: twitter,
        icon: <Twitter />,
    },
];

const SocialLinks = () => (
    <div className="flex justify-center mt-6 space-x-4">
        {socialButtonData.map((item, i) => (
            <SocialIcon
                index={i}
                key={item.title}
                href={item.href}
                title={item.title}
                icon={item.icon}
                size="12"
                hoverColour={item.hoverColour}
            />
        ))}
    </div>
);

export default SocialLinks;
