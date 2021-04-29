import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const Hero = () => (
    <motion.section
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
            duration: 5,
        }}
        className="w-full h-screen max-w-xl px-4 pt-[25%] mx-auto text-center cursor-default"
    >
        <h1 className="text-3xl font-normal md:text-4xl text-gray-50 font-poppins ">
            I&apos;m a{' '}
            <span className="font-medium duration-300 ease-in-out text-primary-400 text-shadow-primary hover:text-shadow-primary-bright">
                web &amp; software
            </span>{' '}
            developer based in
            <span className="duration-150 ease-in-out hover:text-green-500 hover:text-shadow-green"> Ireland</span>
        </h1>
        <SocialLinks />
    </motion.section>
);

export default Hero;
