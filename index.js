const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
const mongoose = require('mongoose')

// Routes
const homeRouter = require('./routes/home')
const contactRouter = require('./routes/contact')
const addRouter = require('./routes/add')
const cardRouter = require('./routes/card')

app.use(express.static(path.join(__dirname, 'public')))

// xQBp7bbAQZK3ivNK password mirzaabdullayev
// mongodb+srv://mirzaabdullayev:<password>@cluster0.nugr9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

async function MongoStart() {
    const uri = 'mongodb+srv://mirzaabdullayev:xQBp7bbAQZK3ivNK@cluster0.nugr9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

    await mongoose.connect(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    })

    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'Connection error: '))
    db.once('open', function () {
        console.log('MongoDB global connected');
    })
}

MongoStart()


// post zaproslrni ishlatadi
app.use(express.urlencoded({ extended: true }))

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
app.use('/card', cardRouter)




const port = 3000

app.listen(port, () => {
    console.log(`Express working on ${port} port`);
})