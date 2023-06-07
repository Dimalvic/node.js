class EventEmitter {
    constructor() {
        this.eventHandlers = {};
    }
    registerHandler(eventName, callback) {
        if (!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = [];
        }
        this.eventHandlers[eventName].push(callback);
    }
    emitEvent(eventName) {
        const handlers = this.eventHandlers[eventName];
        if (handlers) {
            handlers.forEach((callback) => callback());
        }
    }
}

const emitter = new EventEmitter();
emitter.registerHandler('userUpdated', () => console.log('Обліковий запис користувача оновлено'));
emitter.emitEvent('userUpdated'); 

