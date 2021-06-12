import React from 'react'
import PropTypes from 'prop-types'
import {
    SideBarProvider,
    ButtonSidebar,
    NavigationSidebar,
} from './Menu'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
    return (
        <div className="body-wrap boxed-container" style={{ height: '100%' }}>
            <div id="outer-container" style={{ height: '100%' }}>
                <SideBarProvider>
                    <div className="inner-sidebar">
                        <ButtonSidebar />
                        <NavigationSidebar />
                    </div>
                    <div id="page-wrap size-sidebar">
                        <Header />
                        <main> {children} </main>
                        <Footer />
                    </div>
                </SideBarProvider>
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
}
