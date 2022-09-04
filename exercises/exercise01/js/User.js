'use strict';

class User {

    #api = null;
    #messenger = null;

    constructor(api, messenger) {
        this.#api = api;
        this.#messenger = messenger;
    };

    success(text, user) {
        const message = user ? `${text}: ${user.firstName} ${user.lastName}` : text;
        this.#messenger.success(message);
    };

    async create(user) {
        try {
            const result = await this.#api.post(user);
            this.success('created', result);
        } catch (error) {
            this.#messenger.error(error.message);
        }
    };

    async read(id) {
        try {
            const result = await this.#api.get(id);
            this.success('read', result);
        } catch (error) {
            this.#messenger.error(error.message);
        }
    }

    async update(id, user) {
        try {
            const result = await this.#api.put(id, user);
            this.success('updated', result);
        } catch (error) {
            this.#messenger.error(error.message);
        }
    }

    async delete(id) {
        try {
            const result = await this.#api.delete(id);
            this.success('deleted', result);
        } catch (error) {
            this.#messenger.error(error.message);
        }
    }
}

export { User };