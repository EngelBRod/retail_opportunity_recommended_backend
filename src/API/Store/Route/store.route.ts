import express from 'express';
import { httpGetAllStores } from '../Controller/store.controller';

const Store = express.Router();

Store.get('/', httpGetAllStores);

export default Store;