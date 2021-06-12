import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import Menu from 'react-burger-menu/lib/menus/slide'
import SidebarMenuContext from '../../helpers/context'
import { useSelector } from 'react-redux'
import { MenuItem } from './MenuItem'

const SideBarProvider = ({ children }) => {
    const [menuOpenState, setMenuOpenState] = useState(false)

    return (
        <SidebarMenuContext.Provider
            value={{
                isMenuOpen: menuOpenState,
                toggleMenu: () => setMenuOpenState(!menuOpenState),
                stateChangeHandler: (newState) =>
                    setMenuOpenState(newState.isOpen),
            }}
        >
            {children}
        </SidebarMenuContext.Provider>
    )
}

const ButtonSidebar = () => {
    const { toggleMenu } = useContext(SidebarMenuContext)
    return (
        <div className="bm-burger-button">
            <button onClick={toggleMenu} className="react-burger-menu-btn">
                Toggle menu
            </button>
            <span>
                <span className="bm-burger-bars" style={{ top: '0%' }}></span>
                <span className="bm-burger-bars" style={{ top: '40%' }}></span>
                <span className="bm-burger-bars" style={{ top: '80%' }}></span>
            </span>
        </div>
    )
}

const NavigationSidebar = () => {
    const { isMenuOpen, stateChangeHandler } = useContext(SidebarMenuContext)
    const { loading } = useSelector((state) => state.ui)
    const usersInfo = useSelector((state) => state.users)
    const starWarInfo = useSelector((state) => state.swapi)

    return (
        <Menu
            right
            width={520}
            customBurgerIcon={false}
            isOpen={isMenuOpen}
            onStateChange={(state) => stateChangeHandler(state)}
        >
            {loading ? (
                <p>Loading...</p>
            ) : (
                <MenuItem users={usersInfo} swapi={starWarInfo} />
            )}
        </Menu>
    )
}

SideBarProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
}

export { SideBarProvider, ButtonSidebar, NavigationSidebar }
