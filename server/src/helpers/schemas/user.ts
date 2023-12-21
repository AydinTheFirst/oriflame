import mongoose, { Schema } from "mongoose";

interface ISchema {
  id: string;
  email: string;
  name: string;
  number: number;
  gender: string;
  dateOfBirth: string;
  city: string;
  state: string;
  contact: string;
}

const model = mongoose.model<ISchema>(
  "user",
  new Schema<ISchema>({
    id: { type: String, unique: true },
    email: { type: String, unique: true },
    name: String,
    number: { type: Number, unique: true },
    gender: String,
    dateOfBirth: String,
    city: String,
    state: String,
    contact: String,
  })
);

export const userModel = model;
export type IUser = ISchema;

const randomString = (length: number) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

const randomEmail = () => {
  return `${randomString(10)}@${randomString(5)}.com`;
};
