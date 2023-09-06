import mongoose, { Schema } from "mongoose";

const emailSchema = new Schema({
  email: String,
  name: String,
  message: String
});

const Email = mongoose.models.Email || mongoose.model("Email", emailSchema);

export default Email;
