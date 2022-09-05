'use strict';

async function request (method, url) {
    try {
        const result = await fetch(url, { method } );
        console.log(result.json());
    } catch (error) {
        console.log(error);
    }
}

async function delay (timeout, callback) {
    setTimeout(() => {
        callback();
    }, timeout);
}
