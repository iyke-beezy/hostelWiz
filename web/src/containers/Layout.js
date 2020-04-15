import React from 'react';
import PropTypes from 'prop-types';

import './Layout.css';

const propTypes = {
    children: PropTypes.node.isRequired,
    contentCenter: PropTypes.bool
};

const defaultProps = {
    contentCenter: false
};

const Layout = ({ children, contentCenter }) => {
    return (
        <section>
            <header>
                <h4>HostelWiz</h4>
            </header>
            <main className={contentCenter ? 'content-center' : ''}>{children}</main>
            <footer>
                <p>
                    Dummy designs
        </p>
            </footer>
        </section>
    );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;