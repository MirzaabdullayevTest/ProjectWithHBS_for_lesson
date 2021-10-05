const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')

// Routes
const homeRouter = require('./routes/home')
const contactRouter = require('./routes/contact')
const addRouter = require('./routes/add')
const newRouter = require('./routes/newPhone')
const cardRouter = require('./routes/card')

app.use(express.static(path.join(__dirname, 'public')))

// post zaproslrni ishlatadi
app.use(express.urlencoded({extended: true}))

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use('/', homeRouter)
app.use('/contact', contactRouter)
app.use('/add', addRouter)
app.use('/new', newRouter)
app.use('/card', cardRouter)

const port = 3000
app.listen(port, () => {
    console.log(`Express working on ${port} port`);
})