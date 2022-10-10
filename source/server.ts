import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import routes from 'routes';

const app = express();
const port = process.env.port;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => console.log('Vooooa Bruxãoooo 🧙‍♂️'));
