// setTimeout( () => {
//    console.log('Two seconds are up')
// }, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
   return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longtitude: 0
        }
        callback(data)
    }, 2000)
}

geocode('Da Nang', (data) => {
   console.log(data)
})
