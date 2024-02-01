import testHtml from "./test/test.html.js";
import { textHtml, json, svg } from './server/wrapper.js'
import libraryOverview from "./lib/libraryOverview.js";
import randomCube from "./random_cube/randomCube.js";

const resolver = fn => (req, res) => fn(req.args, req.context);

const GET = {
  '/': textHtml(() => '<h1>Main page!</h2>'),

  '/random-cube': svg(randomCube),

  '/api/echo': json((req, res) => {
    return { args: req.args, context: req.context };
  }),

  '/api/library-overview': json(resolver(libraryOverview)),

  '/test': textHtml(testHtml),
};

const POST = {
  '/api/salute': json((req, res) => {
    return req.args;
  }),
};

export default { GET, POST };
