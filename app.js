const express = require('express')
const app = express()
const path = require('path')
const PORT = 4020

app.set('view engine', 'ejs')

app.use(
    '/css',
    express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')),
)
app.use(
    '/js',
    express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')),
)
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
