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

app.get('/contact', (req, res) => {

    const title = generateTitle()

    res.render('contact', {
        pageTitle: title,

    })
})

app.get('/about', (req, res) => {

    const title = generateTitle()

    res.render('about', {
        pageTitle: title,

    })
})

app.get('/signup', (req, res) => {

    const title = generateTitle()

    res.render('signup', {
        pageTitle: title,

    })
})

app.get('/login', (req, res) => {

    const title = generateTitle()

    res.render('login', {
        pageTitle: title,

    })
})

app.listen(port)