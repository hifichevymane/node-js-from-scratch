import http from 'http';
import router from './server/router.js';
import args from './server/args.js';
import context from './server/context.js';

import './server/observe.js';

const server = http.createServer(args(context(router(
  (req, res) => {
    res.end();
  }
))));

server.listen(8000, () => console.log('Server is running on port 8000: http://localhost:8000'));
