const EventEmitter = require('events');
const ee = new EventEmitter();

describe('event emitter', () => {
  it('emits and listens to events', done => {
    ee.on('we did it', () => {
      done();
    });

    ee.emit('we did it');
  });
});
