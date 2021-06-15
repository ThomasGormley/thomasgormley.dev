const defaultProps = {
    className: 'min-h-screen h-full bg-gradient-to-bl from-gray-800 to-gray-900 pb-2',
};

const PageLayout = ({ children, className = defaultProps.className }) => <div className={className}>{children}</div>;

export default PageLayout;
