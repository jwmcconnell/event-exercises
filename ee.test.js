const EventEmitter = require('events');
const ee = new EventEmitter();

describe('event emitter', () => {
  it('emits and listens to events', done => {
    ee.on('newDog', data => {
      expect(data).toEqual({ name: 'Sport', age: 5, weigth: '20lbs' });
      done();
    });

    ee.emit('newDog', { name: 'Sport', age: 5, weigth: '20lbs' });
  });
});
