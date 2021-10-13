const express = require('express');
const path = require('path') //what is path?
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
//  const fs = require('fs')
//  const lessonFile = fs.readFile('./seedlessonData.json')


const app = express();
const PORT = process.env.PORT || 3001;


// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({});

// Inform Express.js on which template engine to use

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(require('./controller')); 

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});

module.exports = app;