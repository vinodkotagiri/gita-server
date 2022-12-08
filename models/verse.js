const mongoose = require('mongoose')
const { Schema, model } = mongoose
const verseSchema = new Schema({
	chapter_no: Number,
	verse_no: Number,
	language: String,
	chapter_name: String,
	verse: String,
	audio_link: String,
	translation: String,
})
module.exports = model('Verse', verseSchema)
