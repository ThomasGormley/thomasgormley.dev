const defaultProps = {
    className: 'min-h-screen bg-gradient-to-bl from-gray-800 to-gray-900',
};

const PageLayout = ({ children, className = defaultProps.className }) => <div className={className}>{children}</div>;

export default PageLayout;
