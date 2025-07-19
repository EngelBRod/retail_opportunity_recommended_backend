import express from 'express';
import morgan from 'morgan';
import { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import API from './API/API';

const app:Express = express();

app.use(helmet());
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());


app.use('/v1', API);


export default app;