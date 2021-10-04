const app = require('express').Router();
const { Lesson } = require('../models');


app.get('/', async (req, res) => {
  try {
  console.log("endpoint hit!");
    // Get all post and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const post = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      post, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
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
  
        res.render('lesson', { lesson });  // handlebars
      } else {
        res.post(404).end();
      }
    } catch (err) {
      res.post(500).json(err);
    }
  });