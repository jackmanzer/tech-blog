const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogpostRoutes = require('./blogpostRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/comment', commentRoutes);
router.use('/blogpost', blogpostRoutes);

module.exports = router;
