var prompt = require('prompt-sync')();
let Library = {}
const Manage = {
             AddBook:function(){
     let book = prompt('write the name of the book : ');
     let author = prompt('write the name of the author : ');
     let year = prompt('write the year of the book produced : ');
     Library={
         "livre":book,
         "author":author,
         "year":year
             }
     console.log(Library)

}}
Manage.AddBook()