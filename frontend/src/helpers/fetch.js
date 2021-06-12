const baseUrl = process.env.API_URL
const apiKey = process.env.ACCESS_TOKEN_APIKEY

const fetchXAuthBasic = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`

  const headers = {
    'Content-type': 'application/json',
    'X-Api': `Basic ${apiKey}`,
  }

  if (method === 'GET') {
    return fetch(url, {
      method,
      headers,
    })
  }
  return fetch(url, {
    method,
    headers,
    body: JSON.stringify(data),
  })
}
