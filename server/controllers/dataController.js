const db = require('../models/dataModels.js')

const dataController = {}

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

// return db.query('SELECT * FROM users WHERE username = $1', [username]).then(
// 	(data) => (
// 		(res.locals.userId = data),
// 		console
// 			.log(res.locals.userID)
// 			.then(() => next())
// 			.catch((err) =>
// 				next({
// 					log:
// 						'Express error handler caught userController.getUser middleware' +
// 						err,
// 					status: 400,
// 					message: 'ERROR',
// 				})
// 			)
// 	)
// )

module.exports = dataController
