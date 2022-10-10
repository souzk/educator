import { Router } from 'express';
import Handle from 'controllers/educators';
import Treatment from 'middleware';

const educatorRoute = Router();

educatorRoute
  .route('/:id?/')
  .get(Handle.educator.all)
  .post(Handle.educator.create)
  .patch(Treatment.error, Handle.educator.change)
  .put(Treatment.error, Handle.educator.update)
  .delete(Treatment.error, Handle.educator.delete);

export default educatorRoute;
