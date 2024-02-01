import rules from "../rules.js";
import { sub } from "../pubsub.js";

console.group('Observing', rules.length, 'rules');

rules.forEach(([eventName, callback]) => {
  sub(eventName, callback);
});

console.groupEnd();
