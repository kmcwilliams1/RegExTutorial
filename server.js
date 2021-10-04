const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers'); 
const sequelize = require('./config/connection');



const app = express();
const PORT = process.env.PORT || 3001;


app.use(session(sess));

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(require('./controllers')); 

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});