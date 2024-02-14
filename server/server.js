const express = require('express');
const app = express();
const apiRouter = require('./routers/api')
const cors = require('cors');
const path = require('path');
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.json());


app.use('/', apiRouter);


//  define a route to serve CSS file
app.get('/Output.css', (req, res) => {
  // res.setHeader('Content-Type', 'text/css'); //  MIME?
  res.sendFile(path.join(__dirname, '../client/stylesheets/Output.css' ));
})

app.use((err, req, res, next) => {
    console.log('error in app.use: ', err)
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, () => console.log(' ੈ‧₊˚ HEY LISTEN! ੈ‧₊˚ (on 3000)'));