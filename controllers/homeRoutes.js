const router = require('express').Router();
const { User, Blogpost, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blogpost.findAll({
          include: [
            {
              model: User,
              attributes: ['name'],
            },
          ],
        });
    
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
    
        res.render('homepage', { 
          blogs, 
          logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    res.render('login')
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: [{ model: Blogpost }],
        });
    
        const user = userData.get({ plain: true });

          res.render('dashboard', {
            ...user,
            logged_in: true
          });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard/create-new-post', withAuth, async (req, res) => {
    res.render('create-new-post')
});

router.get('/dashboard/edit-post', withAuth, async (req, res) => {
    res.render('editpost')
});

router.get('/blogpost/:id', async (req, res) => {
    try {
        const blogpostData = await Blogpost.findByPk(req.params.id, {
          include: [
            {
              model: User,
              attributes: ['name'],
            },
          ],
        });

        const blogpost = blogpostData.get({ plain: true });
    
        const commentData = await Comment.findAll({
          where: {blogpost_id: req.params.id},
          include: [
            {
              model: User,
              attributes: ['name'],
            },
          ],
        });

        const comments = commentData.map((comment) => comment.get({ plain: true }));

        res.render('blogpost', {
          ...blogpost,
          comments,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
});


router.get('/blogpost/edit/:id', withAuth, async (req, res) => { 
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    res.render('editpost', {
      ...blogpost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
