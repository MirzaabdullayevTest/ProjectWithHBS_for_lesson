const { Router } = require('express')
const router = Router()
const Phone = require('../model/Phone')
const Card = require('../model/Card')

router.post('/add', async (req, res) => {
    const phone = await Phone.getById(req.body.id)
    // console.log(phone);
    await Card.add(phone)
    res.redirect('/card/add')
})

router.delete('/remove/:id', async (req, res) => {
    const card = await Card.remove(req.params.id)
    res.status(200).json(card)
})

router.get('/add', async (req, res) => {
    const card = await Card.fetch()
    // console.log(card.phones);
    res.render('card', {
        title: 'Shopping card',
        models: card.phones, /// massiv
        price: card.price,
        isCard: true
    })
})



module.exports = router