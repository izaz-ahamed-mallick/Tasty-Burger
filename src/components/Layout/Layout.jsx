import Header from "./Header";

import Footer from "./Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children is properly validated
};
export default Layout;
