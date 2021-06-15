import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserFeatures } from './UserFeatures'
import { UserIlustrations } from './UserIlustrations'

export const UsersContainer = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-copy">
                            <h1 className="hero-title mt-0 is-revealing animate__animated animate__pulse animate__repeat-2">
                                Usuarios <br /> {'>'}
                                <NavLink to="/swapi" className="h3">
                                    Swapi
                                </NavLink>
                            </h1>
                            <p className="hero-paragraph is-revealing">
                                A continuación se presentarán los ejercicios
                                propuestos realizando consumo de la api{' '}
                                <small className="text-secondary">
                                    https://randomuser.me
                                </small>
                                , incluyendo las especificaciones para para
                                servicio.{' '}
                            </p>
                            <div className="hero-form field field-grouped is-revealing">
                                <div className="control">
                                    <button
                                        className="button button-primary button-block"

                                    >
                                        Cambiar API
                                    </button>
                                </div>
                            </div>
                        </div>
                        <UserIlustrations />
                    </div>
                </div>
            </section>
            <UserFeatures />
        </>
    )
}
