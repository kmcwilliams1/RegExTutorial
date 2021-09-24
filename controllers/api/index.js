const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const lessonRoutes = require('./lesson-routes');


router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/lesson', lessonRoutes);


module.exports = router;

