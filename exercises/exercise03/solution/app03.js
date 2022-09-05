let maxRetry = 3;
let retryCounter = 1;
const delayInMilliseconds = 5000;
let users = [];

async function delay(timeout, callback) {
    setTimeout(() => {
        callback();
    }, timeout);
}

async function request(url, method) {
    try {
        const result = await fetch(url, { method });
        console.log(result.json());
    } catch (error) {
        if (error && retryCounter <= maxRetry) {
            retryCounter++;
            delay(delayInMilliseconds, request);
        } else {
            console.error(error);
            retryCounter = 1;
        }
    }
}

export { maxRetry, retryCounter, delayInMilliseconds, users, request };