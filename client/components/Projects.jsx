import { motion } from 'framer-motion';
const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const Projects = () => (
    <motion.section
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
            delay: 1,
            duration: 3,
        }}
        id="projects"
        className="px-4 mx-auto text-gray-50 mt-36"
    >
        <div className="max-w-2xl mx-auto mb-10">
            <h1 className="text-3xl font-semibold ">Projects</h1>
            <p className="text-gray-400">Some projects I&apos;ve enjoyed working on</p>
        </div>

        <div className="mx-auto">
            <div className="grid grid-flow-col-dense grid-cols-2 gap-4">
                <div className="flex-shrink-0">
                    <div className="relative rounded">
                        <span className="relative z-10 block">
                            <img
                                src="/projects/mepp-tracker-16-9.jpg"
                                className="block object-contain w-full rounded-xl"
                                alt="MEPP Tracker"
                            />
                        </span>
                        <img
                            src="/projects/mepp-tracker-16-9.jpg"
                            className="absolute top-0 object-contain w-full opacity-25 filter blur-lg rounded-2xl"
                            alt="MEPP Tracker"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full text-right">
                    <h2 className="text-2xl font-medium">MEPP Tracker</h2>
                    <p className="text-sm font-normal text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde magnam quia, perferendis autem
                        hic veniam incidunt ad enim magni distinctio deserunt vero excepturi alias nesciunt saepe
                        adipisci a necessitatibus.
                    </p>
                </div>
            </div>
        </div>
    </motion.section>
);

export default Projects;
