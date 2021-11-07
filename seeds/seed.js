const sequelize = require('../config/connection');
const { Blogpost, Comment, User } = require('../models');
const blogpostData = require('./blogpostData.json');
const userData = require('./userData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData)

  await Blogpost.bulkCreate(blogpostData);

  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
