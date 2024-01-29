import { log } from 'winston';
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



//create new user
export const newUser = async (body) => {
 
    // Store hash in your password DB.
    const userEx = User.findOne({ email_id: body.email })
        if (userEx) {
          throw new Error("Email Already exist")
        }else{
          const hash = await bcrypt.hash(body.password, 10)
          body.password = hash
          const data = await User.create(body);
          return data;
        }
    
};



//get single user
export const getUser = async (body) => {


    const data = await User.findOne({ email_id: body.email_id });
    if(data != null){
      const ismatch = await bcrypt.compare(body.password,data.password)
// data && data.password === body.password

    if (ismatch ) {
      // Authentication successful
      var token = jwt.sign({ email_id: 'qwerty@m.in' }, 'shhhhh');
      return token;
    } else {
      // Authentication failed
      throw new Error('');
    }

    }else{
      throw new Error("Invalid Email")
    }
    
  
};
