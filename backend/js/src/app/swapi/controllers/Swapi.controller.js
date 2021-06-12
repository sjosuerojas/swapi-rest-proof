const client = require('../../../utils/request')
const { app } = require('../../../config/env.config')

/**
 * @argument endpoint
 * @description fetch swapi data, returning related data according to the movies
 * @returns Promise<request>
 */
const fetchApi = async function (endpoint = '?') {
  try {
    return await client.requestClient(`${app.swapi}/${endpoint}`)
  } catch (error) {
    console.error(error)
  }
}

/**
 * @argument records
 * @argument passengers
 * @description return the specified object
 * @returns array | string
 */
const specificationStartships = function (records, passengers) {
  return records.map((ship) => {
    // Validate time travel
    const validTime = ['year', 'years', 'month', 'months', 'week', 'weeks']
    const fuel = ship.consumables.split(' ')
    const isValidTimeTravel = validTime.includes(fuel[1]) ? true : false

    // Validate most speed reached
    const isValidSpeedReached =
      ship.max_atmosphering_speed !== 'n/a' ? true : false

    // Validate number of passengers are correct
    const isValidNoPass = ship.passengers >= passengers ? true : false

    if (isValidTimeTravel && isValidSpeedReached && isValidNoPass) {
      return {
        name: ship.name,
        passengers: ship.passengers,
        min_time_travel: ship.consumables,
        max_speed: ship.max_atmosphering_speed,
      }
    }
  })
}

/**
 * @argument records
 * @argument terrain
 * @description return the specified object
 * @returns array | string
 */
const specificationPlanetsByTerrain = function (records, terrain) {
  return records.map((planet) => {
    // Validate terrain
    const validTerrains = [
      'grasslands',
      'mountains',
      'desert',
      'jungle',
      'rainforests',
      'tundra',
      'ice caves',
      'mountain ranges',
      'gas giant',
      'forests',
      'lakes',
      'grassy hills',
      'swamps',
      'cityscape',
      'ocean',
    ]
    const isValidTerrain = validTerrains.includes(terrain) ? true : false

    // Validate population
    const isValidPopulation = planet.population !== 'unknown' ? true : false

    if (isValidTerrain && isValidPopulation) {
      return {
        name: planet.terrain,
        terrain: planet.terrain,
        population: planet.population,
      }
    }
  })
}

/**
 * @argument req
 * @argument res
 * @description index
 * @returns Promise<obj> data | <obj> err
 */
exports.index = async (req, res) => {
  try {
    const response = await fetchApi()
    res.status(200).json({
      notice: 'Loading times in this API can be high due to its concurrency',  
      message: 'Resources retrieved successfully',
      data: response,
    })
  } catch (error) {
    console.error(error)
  }
}

/**
 * @argument req
 * @argument res
 * @description getFastestShip
 * @returns Promise<obj> data | <obj> err
 */
exports.getFastestShip = async (req, res) => {
  try {
    const params = req.params
    const response = await fetchApi('starships')
    const startships = specificationStartships(response.results, params.id)

    res.status(200).json({
      notice: 'Loading times in this API can be high due to its concurrency',  
      message: 'Resources retrieved successfully',
      data: startships.filter((ship) => ship),
    })
  } catch (error) {
    console.error(error)
  }
}

/**
 * @argument req
 * @argument res
 * @description getPlanetByTerrain
 * @returns Promise<obj> data | <obj> err
 */
exports.getPlanetByTerrain = async (req, res) => {
  try {
    const params = req.params
    const response = await fetchApi('planets')

    const planets = specificationPlanetsByTerrain(response.results, params.id)

    res.status(200).json({
      notice: 'Loading times in this API can be high due to its concurrency',  
      message: 'Resources retrieved successfully',
      data: planets.filter((planet) => planet),
    })
  } catch (error) {
    console.error(error)
  }
}
