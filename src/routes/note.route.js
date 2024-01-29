import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


//route to create a new user
router.post('',noteController.newNote);

//route to login and authentication
router.post('/getnote', noteController.getNote);



export default router;
