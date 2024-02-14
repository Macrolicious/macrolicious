const db = require('../models/dataModels.js')

const dataController = {}

//.getUser currently is used to check connection w/ database - Amir[2.13@12:00]
dataController.getUser = async (req, res, next) => {
	const { username, email } = req.body

	try {
		const { rows } = await db.query('SELECT * FROM users')
		res.json(rows)
	} catch (err) {
		next({
			log:
				'Express error handler caught userController.getUser middleware' + err,
			status: 400,
			message: 'ERROR',
		})
	}
}



module.exports = dataController

