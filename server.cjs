// server.cjs
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data/db.json'));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(auth);
server.use(router);

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});

