import { log } from 'winston';
import Note from '../models/note.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//get all Note
export const getAllNote = async () => {
    const data = await Note.find();
    return data;
  };

//create new note
export const newNote = async (body) => {

    const data = await Note.create(body);
    return data;
    
};


//get single note
export const getNote = async (id) => {
    const data = await Note.findById(id);
    return data
};

//update single Note
export const updatNote = async (_id, body) => {
    const data = await Note.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  };

  //delete single Note
export const deletNote = async (id) => {
    await Note.findByIdAndDelete(id);
    return '';
  };
  
  //get single Note
  export const geNote = async (id) => {
    const data = await Note.findById(id);
    return data;
  };
