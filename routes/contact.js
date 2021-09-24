const express = require('express')
const router = express()

router.get('/',(req, res)=>{
    res.render('contact', {
        title: 'Contact',
        isContact: true

    })
})

module.exports = router