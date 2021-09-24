const express = require('express')
const router = express()

router.get('/',(req, res)=>{
    res.render('new', {
        title: 'New',
        isNew: true

    })
})

// router.post('/',(res,res)=>{
//     console.log(req.body);
//     res.redirect('/')
// })

module.exports = router