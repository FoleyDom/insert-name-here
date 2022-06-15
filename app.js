const express = require('express')
const app = express()
const PORT = 4020

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
