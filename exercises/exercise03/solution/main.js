'use strict'

import * as App from './app03.js';

const urls = ['./user1.json', './user2.json', './user3.json'];
const method = {
    method: 'GET'
}

async function getResult(urls, method, arrayOfResults) {
    for (let url of urls) {
        const result = await App.request(url, method);
        await arrayOfResults.push(result);
    }
}

getResult(urls, method, App.users);
console.log(App.users);