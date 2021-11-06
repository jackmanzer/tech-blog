const router = require('express').Router();
// const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage')
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});

router.get('/login', async (req, res) => {
    res.render('login')
});

router.get('/dashboard', withAuth, async (req, res) => {
    res.render('dashboard')
});

router.get('/dashboard/create-new-post', withAuth, async (req, res) => {
    res.render('create-new-post')
});

router.get('/dashboard/edit-post', withAuth, async (req, res) => {
    res.render('editpost')
});

router.get('/blogpost', async (req, res) => {
    res.render('blogpost')
});



module.exports = router;
