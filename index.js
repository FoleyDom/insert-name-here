const express = require('express')
const app = express()
const PORT = 4020

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
