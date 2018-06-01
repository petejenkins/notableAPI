
// routes/other_routes.js

module.exports = function(app, db) {

  app.get('/hello', (req, res) => {
    res.send('Hello!!!');
  });

};
