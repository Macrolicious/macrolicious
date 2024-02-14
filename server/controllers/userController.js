const { pool } = require('../models/dataModels');
const db = pool;

const userController = {};

userController.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    console.log('%%%%% IN USERCONTROLLER %%%%%', username, password)
    const query = `SELECT * FROM users WHERE username = $1 AND password = $2`;
    const params = [username, password]
    const { rows } = await db.query(query, params);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'User not found' });
    }

    res.locals.username = rows[0].username;
    res.locals.userID = rows[0]._id;

    console.log('TTTHHHIIISSS IIISSS RREEESSSLLLOOCCCAAALLLS',res.locals)

    return next()

  } catch (err) {
    return next({
      log: `userController.login ERROR: ${err}`,
      status: 500,
      message: {
        error: 'Error occured in userController.login',
      }
    });
  }
}

module.exports = userController