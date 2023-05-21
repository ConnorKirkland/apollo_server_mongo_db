import {Schema, model} from 'mongoose';

const bookSchema = new Schema({
  title: String,
  author: String,
});

const Book = model('Book', bookSchema);

export { Book };
