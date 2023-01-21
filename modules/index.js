import { BookCollection } from './book-collection.js';
import { addBookForm } from './add-book-form.js';
import { display } from './display.js';
import { showDateTime } from './datetime.js';
const bookCollection = new BookCollection();
display();
addBookForm();
showDateTime ();
