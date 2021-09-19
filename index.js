const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('views engine', 'hbs')
app.set('views', 'views')

app.get('/', (req, res) => {
    res.render('index.hbs', {
        title: 'Home',
        isHome: true
    })
})

app.get('/contact', (req, res) => {
    res.render('contact.hbs', {
        title: 'Contact',
        isContact: true
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`Express working on ${port} port`);
})