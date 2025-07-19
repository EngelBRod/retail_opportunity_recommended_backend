import express from 'express';
import Store from './Store/Route/store.route';


const API = express.Router();


API.use('/store', Store);

export default API;