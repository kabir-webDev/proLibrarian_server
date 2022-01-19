import mongoose from "mongoose";

const new_bookSchema = mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  publication: { type: String, required: true },
  copies: { type: Number, required: true },
});

const bookModel = mongoose.model("new_book", new_bookSchema);

export default bookModel;
