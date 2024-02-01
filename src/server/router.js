import routes from "../routes.js";
import { pub } from "../pubsub.js";

export default fn => async (req, res) => {
  const url = new URL(req.url, 'http://localhost');

  const foundRoute = routes[req.method]?.[url.pathname];

  if (foundRoute) {
    try {
      const data = await foundRoute(req, res);

      pub(url.pathname, req.args, req.context, { data });
    } catch (err) {
      console.error(err);

      res.statusCode = err.status || 500;
      res.write(JSON.stringify({ error: err.message, status: err.status }));
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ data: 'Not found' }));
  }

  return fn(req, res);
}
