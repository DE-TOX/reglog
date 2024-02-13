import express from 'express';
const router = express.Router();
import { userAuth } from '../middlewares/auth.middleware';

import userRoute from './user.route';
import notesRoute from './note.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/notes', userAuth, notesRoute);
  return router;
};

export default routes;
