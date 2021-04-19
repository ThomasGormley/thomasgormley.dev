const Container = ({ className, children }) => (
    <div className={className ? `${className}` : `max-w-4xl mx-auto`}>{children}</div>
);

export default Container;
