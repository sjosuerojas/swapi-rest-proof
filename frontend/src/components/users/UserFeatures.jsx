import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import {
    startLoadingUsersByAge,
    startLoadingUsersByName,
    startLoadingUsersByRepeatedWord,
} from '../../actions/usersActions'
import SidebarMenuContext from '../../helpers/context'

export const UserFeatures = () => {
    const dispatch = useDispatch()
    const { isMenuOpen, toggleMenu } = useContext(SidebarMenuContext)
    const [formValues, setInputChange] = useForm({ ageinput: '' })
    const { ageinput } = formValues

    const isEnableSidebar = () => isMenuOpen !== true && toggleMenu()

    const handlefetchAndOrder = () => {
        dispatch(startLoadingUsersByName())
        isEnableSidebar()
    }

    const handlefetchAndFind = () => {
        if (ageinput !== '') {
            dispatch(startLoadingUsersByAge(ageinput))
            isEnableSidebar()
        }
    }

    const handlefetchAndCount = () => {
        dispatch(startLoadingUsersByRepeatedWord())
        isEnableSidebar()
    }

    return (
        <section className="features section animate__animated animate__faster animate__bounceInLeft">
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
                                        Orden por nombre <br />
                                        <code>fetchAndOrder</code>
                                    </h4>
                                </div>
                                <p className="text-sm mb-0">
                                    Consulta los 10 primeros registros y los
                                    ordena por nombre primer nombre
                                </p>
                                <button
                                    type="button"
                                    className="button button-sm button-primary"
                                    onClick={handlefetchAndOrder}
                                >
                                    Consultar
                                </button>
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
                                        Busqueda por edad <br />
                                        <code>fetchAndFind</code>
                                    </h4>
                                </div>
                                <p className="text-sm mb-0">
                                    Consulta una persona que tenga una edad
                                    mayor a la proporcionada
                                </p>
                                <input
                                    id="ageinput"
                                    className="custom-input"
                                    name="ageinput"
                                    placeholder="Edad"
                                    type="text"
                                    value={ageinput}
                                    onChange={setInputChange}
                                />
                                <button
                                    className="button button-sm button-primary"
                                    onClick={handlefetchAndFind}
                                >
                                    Consultar
                                </button>
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
                                            <g fill="none" fillRule="nonzero">
                                                <path
                                                    d="M16 9c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z"
                                                    fill="#4353FF"
                                                />
                                                <path
                                                    d="M27 9c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z"
                                                    fill="#43F1FF"
                                                />
                                                <path
                                                    d="M27 12c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
                                                    fill="#4353FF"
                                                />
                                                <path
                                                    d="M5 23c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
                                                    fill="#43F1FF"
                                                />
                                                <path
                                                    d="M27 23c-1.859 0-3.41 1.28-3.858 3h-3.284A3.994 3.994 0 0 0 17 23.142v-3.284c1.72-.447 3-2 3-3.858 0-2.206-1.794-4-4-4-1.859 0-3.41 1.28-3.858 3H8.858A3.994 3.994 0 0 0 6 12.142V8.858c1.72-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S1 2.794 1 5c0 1.858 1.28 3.41 3 3.858v3.284c-1.72.447-3 2-3 3.858 0 2.206 1.794 4 4 4 1.859 0 3.41-1.28 3.858-3h3.284A3.994 3.994 0 0 0 15 19.858v3.284c-1.72.447-3 2-3 3.858 0 2.206 1.794 4 4 4 1.859 0 3.41-1.28 3.858-3h3.284c.447 1.72 2 3 3.858 3 2.206 0 4-1.794 4-4s-1.794-4-4-4z"
                                                    fill="#4353FF"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <h4 className="feature-title m-0">
                                        Busqueda por letra mas repetida <br />
                                        <code>fetchAndCount</code>
                                    </h4>
                                </div>
                                <p className="text-sm mb-0">
                                    Consulta los 5 primeros registros y de ellos
                                    busca en sus nombre la letra mas repetida
                                </p>
                                <button
                                    className="button button-sm button-primary"
                                    onClick={handlefetchAndCount}
                                >
                                    Consultar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
