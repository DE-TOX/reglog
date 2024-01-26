import { log } from 'winston';
import User from '../models/user.model';
import bcrypt from 'bcrypt';

//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user
export const newUser = async (body) => {
 
    // Store hash in your password DB.
    
    const hash = await bcrypt.hash(body.password, 10)
    body.password = hash
    const data = await User.create(body);
    return data;

};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
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

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (body) => {

  try {
    const data = await User.findOne({ email_id: body.email_id });

    const ismatch = await bcrypt.compare(body.password,data.password)
// data && data.password === body.password
console.log(ismatch);
    if (ismatch) {
      // Authentication successful
      return( 'Authentication successful');
    } else {
      // Authentication failed
      return('Authentication failed');
    }
  } catch (error) {
    return error
  }
};
