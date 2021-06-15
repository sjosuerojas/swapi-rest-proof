export const types = {
    uiCheckServerLiveness: '[UI] Checking server liveness',
    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',
    uiOnError: '[UI] Error while fetching users',

    usersFetchAndOrder: '[Users] Load users and order by name',
    usersFetchAndFind: '[Users] Load users and search for the age specified',
    usersFetchAndCount: '[Users] Load users and find the repeated',
    usersClearPreviousData: '[Users] clear data from previuos request',
    usersOnError: '[Users] Error while fetching users',

    swapiGetFastestShip: '[SWAPI] Load the fastest ship specified',
    swapiGetPlanetByTerrain: '[SWAPI] Load the planet specified',
    swapiClearPreviousData: '[SWAPI] clear data from previuos request',
    swapiOnError: '[SWAPI] Error while fetching swapi',
}
