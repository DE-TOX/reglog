import { log } from 'winston';
import Note from '../models/note.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



//create new note
export const newNote = async (body) => {

    const data = await Note.create(body);
    return data;
    
};



//get single note
export const getNote = async (body) => {

    const data = await Note.findOne({ title: body.title });
    return data
  
};
