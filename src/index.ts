import {EventEmitter} from 'events';

export class MyWidget extends EventEmitter {
  /**
   * Do some async work.
   */
  async run() {
    this.emit('start');
    await Promise.resolve(); // do some work
    this.emit('done');
  }
}

export interface MyWidget {
  /**
   *
   * The "start" event is when `run` has started. The "done" event is
   * emitted when `run` has finished.
   *
   * @param eventName The name of the event - always `start` or `done`.
   * @param listener The listener function to call when the event is emitted.
   */
  on(eventName: 'start' | 'done', listener: () => void): this;

  // The generic variant inherited from EventEmitter
  on(event: string | symbol, listener: (...args: any[]) => void): this;
}
