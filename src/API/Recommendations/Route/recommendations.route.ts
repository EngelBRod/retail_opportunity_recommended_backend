import express from 'express';
import { getAllRecommendations } from '../Controller/recommendations.controller';

const Recommendations = express.Router();


Recommendations.get('/:id',getAllRecommendations);

export default Recommendations;