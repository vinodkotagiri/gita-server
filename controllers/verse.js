const Verse = require('../models/verse')
exports.getVerse = async (req, res) => {
	try {
		const { chapterId, verseId } = req.params
		const verse = await Verse.findOne({ $and: [{ chapter_no: chapterId }, { verse_no: verseId }] })
		res.json(verse)
	} catch (err) {
		res.status(400).json(err)
	}
}
