import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export default mongoose.model<IUser>('User', UserSchema);
