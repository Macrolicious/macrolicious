const db = require('./models/dataModels.js');

const dataController = {}

async dataController.getUser = (req, res, next) = {
  const { username, email } = req.body;

}