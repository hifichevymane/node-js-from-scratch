import { EventEmitter } from 'node:events';

const pubsub = new EventEmitter();
pubsub.setMaxListeners(1e3);

const safeCall = (eventName, fn) => async (...args) => {
  try {
    await fn(...args);
  } catch (err) {
    console.warn('\x1b[31m', 'Rule error', eventName, '\x1b[0m', err);
  }
}

export const pub = (eventName, ...rest) => {
  pubsub.emit(eventName, ...rest);
};

export const sub = (eventName, callback) => {
  pubsub.addListener(eventName, safeCall(eventName, callback));
};
