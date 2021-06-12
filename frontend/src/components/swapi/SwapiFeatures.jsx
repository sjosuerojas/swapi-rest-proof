import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import {
    startLoadingFastestShip,
    startLoadingPlanetsTerrain,
} from '../../actions/swapiActions'
import SidebarMenuContext from '../../helpers/context'

export const SwapiFeatures = () => {
    const dispatch = useDispatch()
    const { isMenuOpen, toggleMenu } = useContext(SidebarMenuContext)

    const isEnableSidebar = () => isMenuOpen !== true && toggleMenu()

    const handlegetFastestShip = () => {
        dispatch(startLoadingFastestShip(100))
        isEnableSidebar()
    }

    const handlegetPlanetByTerrain = () => {
        dispatch(startLoadingPlanetsTerrain('ocean'))
        isEnableSidebar()
    }

    return (
        <section className="features section">
            <div className="container">
                <div className="features-inner section-inner">
                    <div className="features-wrap">
                        <div className="feature">
                            <div className="feature-inner">
                                <div className="feature-header mb-16">
                                    <div className="feature-icon mr-16">
                                        <svg
                                            width="32"
                                            height="32"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g fillRule="nonzero" fill="none">
                                                <path
                                                    d="M7 8H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM19 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                                                    fill="#4353FF"
                                                />
                                                <path
                                                    d="M19 20h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                                                    fill="#43F1FF"
                                                />
                                                <path
                                                    d="M31 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                                                    fill="#4353FF"
                                                />
                                                <path
                                                    d="M7 20H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                                                    fill="#43F1FF"
                                                />
                                                <path
                                                    d="M7 32H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
                                                    fill="#4353FF"
                                                />
                                                <path
                                                    d="M29.5 18h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"
                                                    fill="#43F1FF"
                                                />
                                                <path
                                                    d="M17.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zM29.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"
                                                    fill="#4353FF"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <h4 className="feature-title m-0">
                                        Busca la nave más rápida <br />
                                        <code>getFastestShip</code>
                                    </h4>
                                </div>
                                <p className="text-sm mb-0">
                                    Consulta la nave mas rapida partiendo de un
                                    numero de pasajeos ingresados
                                </p>
                                <button
                                    className="button button-sm button-primary"
                                    type="button"
                                    onClick={handlegetFastestShip}
                                >Consulta</button>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-inner">
                                <div className="feature-header mb-16">
                                    <div className="feature-icon mr-16">
                                        <svg
                                            width="32"
                                            height="32"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g fillRule="nonzero" fill="none">
                                                <path
                                                    d="M4 12H0V5a5.006 5.006 0 0 1 5-5h7v4H5a1 1 0 0 0-1 1v7z"
                                                    fill="#43F1FF"
                                                />
                                                <path
                                                    d="M32 12h-4V5a1 1 0 0 0-1-1h-7V0h7a5.006 5.006 0 0 1 5 5v7zM12 32H5a5.006 5.006 0 0 1-5-5v-7h4v7a1 1 0 0 0 1 1h7v4z"
                                                    fill="#4353FF"
                                                />
                                                <path
                                                    d="M27 32h-7v-4h7a1 1 0 0 0 1-1v-7h4v7a5.006 5.006 0 0 1-5 5z"
                                                    fill="#43F1FF"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <h4 className="feature-title m-0">
                                        Busca el terreno <br />
                                        <code>getPlanetByTerrain</code>
                                    </h4>
                                </div>
                                <p className="text-sm mb-0">
                                    Consulta el planeta segun su tipo de terreno
                                </p>
                                <button
                                    className="button button-sm button-primary"
                                    type="button"
                                    onClick={handlegetPlanetByTerrain}
                                >Consulta</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
