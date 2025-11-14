const express = require('express');
const morgan = require('morgan');
const path = require('path');

const blogRoutes = require('./routes/blogRoutes');

const app = express();
const port = process.env.PORT || 3000;

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware + static files
app.use(express.static(path.join(__dirname, 'public'), { index: false }));
app.use(express.urlencoded({ extended: true })); // ok so this lets me read form data
app.use(morgan('dev'));

// quick helper so every template knows where we currently are
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use('/blogs', blogRoutes);

// fallback page
app.use((req, res) => {
  res.status(404).render('404', { title: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Server ready on http://localhost:${port}`);
});
