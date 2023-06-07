type EventCallback = () => void;

class EventEmitter {
    private eventHandlers: { [eventName: string]: EventCallback[] };

    constructor() {
        this.eventHandlers = {};
    }

    public registerHandler(eventName: string, callback: EventCallback): void {
        if (!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = [];
        }

        this.eventHandlers[eventName].push(callback);
    }

    public emitEvent(eventName: string): void {
        const handlers = this.eventHandlers[eventName];

        if (handlers) {
            handlers.forEach((callback) => callback());
        }
    }
}

const emitter = new EventEmitter();
emitter.registerHandler('userUpdated', () => console.log('Обліковий запис користувача оновлено'));
emitter.emitEvent('userUpdated'); 
