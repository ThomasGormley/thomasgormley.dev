import { GitHub, SocialIcon, Spotify, Twitter } from './icons';
import config from '../lib/config';

const { twitter, github } = config.social;
const socialButtonData = [
    {
        title: 'Spotify',
        hoverColour: 'hover:text-[#1ED760] hover:drop-shadow-spotify',
        href: '/spotify',
        icon: <Spotify />,
    },
    {
        title: 'GitHub',
        hoverColour: 'hover:text-[#FFF] hover:drop-shadow-github',
        href: github,
        icon: <GitHub />,
    },
    {
        title: 'Twitter',
        hoverColour: 'hover:text-[#1DA1F2] hover:drop-shadow-twitter',
        href: twitter,
        icon: <Twitter />,
    },
];

const SocialLinks = () => (
    <div className="flex justify-center mt-6 space-x-6">
        {socialButtonData.map((item, i) => (
            <SocialIcon
                index={i}
                key={item.title}
                href={item.href}
                title={item.title}
                icon={item.icon}
                hoverColour={item.hoverColour}
            />
        ))}
    </div>
);

export default SocialLinks;
