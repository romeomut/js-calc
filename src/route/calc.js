const express = require('express')
const router = express.Router()

// ================================================================

router.get('/', function (req, res) {
  res.render('calc', {
    name: 'calc',
    component: [],
    title: 'calc',
    data: {},
  })
})

module.exports = router
