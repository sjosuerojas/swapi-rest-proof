const client = require('../../../utils/request')
const { app } = require('../../../config/env.config')

/**
 * @argument defaultUsers
 * @description fetch random users api, returning random data according to the users profile
 * @returns Promise<request>
 */
const fetchApi = async function (defaultUsers = 10) {
  try {
    const uri = `${app.apiUsers}/api/?results=${defaultUsers}`
    const { results } = await client.requestClient(uri)
    return results
  } catch (error) {
    console.error(error)
  }
}

/**
 * @argument fullName
 * @description finds the most repeated letter in a phrase
 * @returns Array
 */
const findLetterMostRepeated = function (fullName) {
  let loweredName = fullName.toLowerCase()
  let splitted = loweredName.split('')
  let reducedName = splitted.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++
    } else {
      acc[el] = 1
    }

    return acc
  }, {})

  return Object.entries(reducedName).reduce((acc, el) =>
    acc[1] > el[1] ? acc : el
  )
}

/**
 * @argument req
 * @argument res
 * @description getUserList
 * @returns Promise<obj> data | <obj> err
 */
exports.index = async (req, res) => {
  try {
    const response = await fetchApi(25)
    res.status(200).json({
      message: 'Users retrieved successfully',
      data: response,
    })
  } catch (error) {
    console.error(error)
  }
}

/**
 * @argument req
 * @argument res
 * @description fetchAndOrder
 * @returns Promise<obj> data | <obj> err
 */
exports.fetchAndOrder = async (req, res) => {
  try {
    const users = await fetchApi(10)
    const filterByName = users.map((item) => item.name.first)

    res.status(200).json({
      message: 'Users retrieved successfully',
      data: {
        records: users.length,
        filterByName,
      },
    })
  } catch (error) {
    console.error(error)
  }
}

/**
 * @argument req
 * @argument res
 * @description fetchAndFind
 * @returns Promise<obj> data | <obj> err
 */
exports.fetchAndFind = async (req, res) => {
  try {
    const params = req.params
    const user = await fetchApi(1)
    const { dob: dateOfBirth } = Object.assign({}, ...user)

    const userAgeGraterThan =
      dateOfBirth.age > params.id
        ? dateOfBirth.age
        : 'Age is not greater than the given one!'

    res.json({
      message: 'User retrieved successfully',
      records: user.length,
      age: userAgeGraterThan,
      info: user,
    })
  } catch (error) {
    console.error(error)
  }
}

/**
 * @argument req
 * @argument res
 * @description fetchAndCount
 * @returns Promise<obj> data | <obj> err
 */
exports.fetchAndCount = async (req, res) => {
  try {
    const users = await fetchApi(5)
    const mostRepeatedLetter = []

    for (const user of users) {
      let fullName = user.name.first + user.name.last
      const repetedLetters = findLetterMostRepeated(fullName)
      mostRepeatedLetter.push(repetedLetters)
    } 

    res.json({
      message: 'Users retrieved successfully',
      records: users.length,
      mostRepeatedLetter,
      info: users,
    })
  } catch (error) {
    console.error(error)
  }
}
