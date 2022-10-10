import { Router } from 'express';
import educatorRoute from 'routes/educator';

const routes = Router();

routes.use('/educators', educatorRoute);

export default routes;
