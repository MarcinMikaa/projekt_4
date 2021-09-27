const express = require('express')
const { title } = require('process')
const port = process.env.PORT || 3000

const generateTitle = () => {
    return 'Node js'
}


const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {

    const title = generateTitle()

    res.render('index', {
        pageTitle: title,
        pageBody: 'hello node'
    })
})

app.get('/kontakt', (req, res) => {

    const title = generateTitle()

    res.render('contact', {
        pageTitle: title,

    })
})

app.listen(port)