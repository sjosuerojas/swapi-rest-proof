import React from 'react'
import PropTypes from 'prop-types'
import { checkProperties } from '../../helpers/objects'

export const MenuItem = ({ users, swapi }) => {
    const { usersByName, usersByAge, usersByRepeatedWord } = users
    const { fastesShip, planetsByTerrain } = swapi

    return (
        <div className="menu-items">
            <a className="bm-item">Resultados:</a>

            <ul className="mt-40">
                {usersByName !== null &&
                    usersByName.filterByName.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
            </ul>

            {usersByAge !== null && (
                <>
                    <p>Edad (mayor a la ingresada)</p>
                    <ul className="mt-40">
                        <li>Edad: {usersByAge.age}</li>
                    </ul>
                    <p>Registro: {usersByAge.records} </p>
                    <PrettyPrintJson data={usersByAge.info} />
                </>
            )}

            {usersByRepeatedWord !== null && (
                <>
                    <h4>(Letra mas repetida, numero de veces)</h4>
                    <ol className="mt-40">
                        {usersByRepeatedWord.mostRepeatedLetter.map(
                            (repeated, i) => (
                                <li key={i}>{repeated}</li>
                            )
                        )}
                    </ol>
                    <h4>Registros: {usersByRepeatedWord.records} </h4>
                    <PrettyPrintJson data={usersByRepeatedWord.info} />
                </>
            )}

            {fastesShip !== null && (
                <>
                    <h4 className="text-light">Nave segun especificacion</h4>
                    {fastesShip.map((item, i) => (
                        <div key={i}>
                            <ul>
                                <li>{item.name}</li>
                                <li>{item.passengers}</li>
                                <li>{item.min_time_travel}</li>
                                <li>{item.max_speed}</li>
                            </ul>
                        </div>
                    ))}
                </>
            )}

            {planetsByTerrain !== null && (
                <>
                    <h4 className="text-light">Planeta segun terreno</h4>
                    {planetsByTerrain.map((item, i) => (
                        <div key={i}>
                            <ul>
                                <li>{item.name}</li>
                                <li>{item.terrain}</li>
                                <li>{item.population}</li>
                            </ul>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export const PrettyPrintJson = ({ data }) => (
    <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
)

MenuItem.propTypes = {
    users: PropTypes.object,
    swapi: PropTypes.object,
}

PrettyPrintJson.propTypes = {
    data: PropTypes.array,
}
