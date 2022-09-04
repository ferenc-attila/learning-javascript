class Api {
    #url = 'http://localhost:3000/';

    constructor(path) {
        this.#url = `${this.#url}${path}`;
    };

    async post(data) {
        const fetchOptions = {
            method: 'POST',
            body: JSON.stringify(data),
        };

        const result = await fetch(this.#url, fetchOptions);
        return result.json();
    };

    async get(id) {
        const result = await fetch(`${this.#url}/${id}`);
        return result.json();
    };

    async put(id, data) {
        const fetchOptions = {
            method: 'PUT',
            body: JSON.stringify(data)
        };

        const result = await fetch(`${this.#url}/${id}`, fetchOptions);
        return result.json();
    };

    async delete(id) {
        const fetchOptions = {
            method: 'DELETE'
        };

        const result = await fetch(`${this.#url}/${id}`, fetchOptions);
        return result.json();
    };
}

export { Api };