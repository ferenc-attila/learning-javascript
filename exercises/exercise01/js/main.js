'use strict';

import { User } from './User.js';
import { Api } from './Api.js';
import { Messenger } from './Messenger.js';

const user = {
    firstName: 'Lili',
    lastName: 'Kovács'
};

const api = new Api('users');
const messenger = new Messenger();
const connection = new User(api, messenger);

connection.read(98);
connection.read(9);
connection.create(user);
connection.update(56, user);
connection.delete(100);
