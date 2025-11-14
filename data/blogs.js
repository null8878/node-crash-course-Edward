const makeId = () => `${Date.now()}-${Math.round(Math.random() * 1e4)}`;

const blogs = [
  {
    id: makeId(),
    title: 'Chasing Async Patterns',
    snippet: 'Notes from when callbacks, promises, and async/await finally clicked.',
    body: 'This app is just storing data in memory, but I still wanted to practice the flow of fetching blog posts. I kept switching between callbacks and promises before async/await actually made sense. Now I can reason about the order of events and middleware without panicking.',
  },
  {
    id: makeId(),
    title: 'Express Middleware Tour',
    snippet: 'Figured out how middleware stacks together before hitting a route.',
    body: 'Morgan is doing the logging, express.urlencoded is letting me read form data, and I threw in a tiny custom middleware just to prove I understood the flow. It is wild how every request touches them in order.',
  },
  {
    id: makeId(),
    title: 'First Fake Blog Data',
    snippet: 'Hard coding posts for now so the templates have something to show.',
    body: 'The crash course uses MongoDB later, but for this module I wanted to focus on the Express basics. So the posts live in a little array inside data/blogs.js. Editing the array feels basic but it keeps the routes simple enough to understand.',
  },
];

const getAll = () => [...blogs];

const getOne = (id) => blogs.find((blog) => blog.id === id);

const add = ({ title, snippet, body }) => {
  const safeTitle = title?.trim() || 'Untitled draft';
  const newBlog = {
    id: makeId(),
    title: safeTitle,
    snippet: snippet?.trim() || safeTitle,
    body: body?.trim() || 'No content yet but the route works!',
  };

  blogs.unshift(newBlog); // ok so newest posts show up first
  return newBlog;
};

const remove = (id) => {
  const index = blogs.findIndex((blog) => blog.id === id);

  if (index === -1) {
    return false;
  }

  blogs.splice(index, 1);
  return true;
};

module.exports = { getAll, getOne, add, remove };
