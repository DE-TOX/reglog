import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newUserValidator } from '../validators/user.validator';


const router = express.Router();

//route to get all note
router.get('', noteController.getAllNotes);

//route to create a new note
router.post('',noteController.newNote);

//route to get single note
router.get('/:_id', noteController.getNote);

//route to update a single note by their note id
router.put('/:_id', noteController.updateNote);

//route to delete a single note by their note id
router.delete('/:_id', noteController.deleteNote);





export default router;
