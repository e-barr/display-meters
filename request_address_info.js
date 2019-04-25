const axios = require('axios')
const listOfAddresses = [
    "SW SCHOLLS FERRY RD,# 102, 97007",
    "15112,SW CANYON WREN WAY, 97007",
    "15114,SW CANYON WREN WAY,97007",
    "15116,SW CANYON WREN WAY,97007",
    "15118,SW CANYON WREN WAY,97007",
    "15120,SW CANYON WREN WAY,97007",
    "14932,SW SCHOLLS FERRY RD,# 301,97007",
    "14754,SW SCHOLLS FERRY RD,# 1017,97007",
    "14339,SW BARROWS RD,97007",
    "45.4336087,14932,SW SCHOLLS FERRY RD,# 201,97007",
    "11950,SW HORIZON BLVD,97007"
]
const baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDtVbli-DqEY984NnMwLOyl2zh0ZaQZBRQ&address="
const responses = []
let completedRequests = 0

for (i in listOfAddresses) {
    axios.get(`${baseUrl + listOfAddresses[i]}`).then((res) => {
        let addressInfo = res.data.results
        const { formatted_address } = addressInfo[0]
        const { lat, lng } = addressInfo[0].geometry.location
        console.log({ formatted_address, latitude: lat, longitude: lng })
        completedRequests++

        if (completedRequests === listOfAddresses.length) {
            console.log("Process completed successfully.")
        }
    })
}