const express = require('express')
const router = express.Router()
const { getVerse } = require('../controllers/verse')
router.get('/:chapterId/:verseId', getVerse)
module.exports = router
