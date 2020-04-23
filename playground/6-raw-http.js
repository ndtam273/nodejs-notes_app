const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=b049f71c0a4efbe442d2b7d4b86e1640&query=45,-75 &units=f'

const request = http.request(url, (response) => {
  let data = ''
  
  response.on('data', (chunk) => {
    data = data + chunk.toString()   
  })

  response.on('end', () => {
      const body = JSON.parse(data)
      console.log(body)
  })
})
request.on('error', (error) => {
    console.log('An error', error)
})
request.end()