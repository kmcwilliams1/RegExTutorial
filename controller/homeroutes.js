const app = require('express').Router();
const { Lesson } = require('../models');


app.get('/', async (req, res) => {
  console.log('hello')
  try {
    res.render('homepage', {});
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

app.get('/lesson/:id', async (req, res) => {
    try {
      const lessonData = await Lesson.findByPk(req.params.id, {
        attributes: ['id',
          'description',
          'title',
          'question',
          'answer'
        ],
      });
      if (lessonData) {
        const lesson = lessonData.get({ plain: true });
        console.log('getting lesson route')
        res.render('lesson', { lesson });  // handlebars
      } else {
        res.status(404).end();
        console.log('not getting lesson route')
      }
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
      console.log('failing getting lesson route')
    }
  });

  module.exports = app;