import React from 'react'
import PropTypes from 'prop-types'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
    return (
        <div className="body-wrap boxed-container">
            <Header />
            <main> {children} </main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
}
