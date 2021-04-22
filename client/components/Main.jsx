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

const Main = () => (
    <motion.main
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
            duration: 5,
        }}
        className="w-full h-screen px-4 pt-56 text-center"
    >
        <div className="max-w-lg mx-auto cursor-default">
            <h1 className="text-3xl font-normal md:text-4xl text-gray-50 font-poppins">
                I&apos;m a <span className="font-medium text-primary-600">web &amp; software</span> developer based in
                <span className="duration-150 ease-in-out hover:text-green-500"> Ireland</span>
            </h1>
        </div>

        <SocialLinks />
    </motion.main>
);

export default Main;
