import React from 'react'
import { NavLink } from 'react-router-dom'
import { SwapiFeatures } from './SwapiFeatures'
import { SwapiIlustrations } from './SwapiIlustrations'

export const SwapiContainer = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-copy">
                            <h1 className="hero-title mt-0 is-revealing">
                                Swapi <br /> {'>'}
                                <NavLink to="/" className="h3">
                                    Usuarios
                                </NavLink>
                            </h1>
                            <p className="hero-paragraph is-revealing">
                                A continuación se presentarán los ejercicios
                                propuestos realizando consumo de la api{' '}
                                <small className="text-secondary">
                                    https://swapi.dev/
                                </small>
                                , incluyendo las especificaciones para para
                                servicio.
                            </p>
                        </div>
                        <SwapiIlustrations />
                    </div>
                </div>
            </section>
            <SwapiFeatures />
        </>
    )
}
