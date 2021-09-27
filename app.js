const express = require('express')
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
    res.send('<html> <title>...')
})

app.listen(port)