const express = require('express');
const blogStore = require('../data/blogs');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('blogs/index', {
    title: 'All Blogs',
    blogs: blogStore.getAll(),
  });
});

router.get('/create', (req, res) => {
  res.render('blogs/create', { title: 'Create a Blog' });
});

router.post('/', (req, res) => {
  const { title, snippet, body } = req.body;
  blogStore.add({ title, snippet, body });
  res.redirect('/blogs');
});

router.get('/:id', (req, res) => {
  const blog = blogStore.getOne(req.params.id);

  if (!blog) {
    return res.status(404).render('404', { title: 'Not Found' });
  }

  res.render('blogs/details', { title: blog.title, blog });
});

router.delete('/:id', (req, res) => {
  const removed = blogStore.remove(req.params.id);

  if (!removed) {
    return res.status(404).json({ error: 'Blog not found' });
  }

  res.json({ redirect: '/blogs' });
});

module.exports = router;
