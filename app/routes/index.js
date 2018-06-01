// routes/index.js

const noteRoutes = require('./note_routes');
const otherRoutes = require('./other_routes');

module.exports = function(app, db) {
  noteRoutes(app, db);
  otherRoutes(app, db);
};
