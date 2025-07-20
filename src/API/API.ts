import express from 'express';
import Store from './Store/Route/store.route';
import Recommendations from './Recommendations/Route/recommendations.route';


const API = express.Router();


API.use('/stores', Store);
API.use('/recommendations', Recommendations);

export default API;