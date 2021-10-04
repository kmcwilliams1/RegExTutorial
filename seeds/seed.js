const sequelize = require('../config/connection');
// different second class may need to be changed 
const { Lesson } = require('../models');

//will need to change the naming 
const lessonData = require('./lessonData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const lesson = await Lesson.bulkCreate(lessonData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();