'use strict';

var querystring = require('querystring'),
    unirest = require('unirest');

function OpenLibrary(){
  this.find = function(query, callback){
  return unirest.get("http://openlibrary.org/search.json")
         .query(query)
         .end(function(response){
           var books = JSON.parse(response.body);
           books.docs = books.docs.map(function(book){
             var copy = {};
             copy.ol_key = book.key;
             copy.title = book.title;

            
             if(book.hasOwnProperty("subtitle")){
               copy.subtitle = book.subtitle; 
             }
             
             if(book.hasOwnProperty("cover_i")){
               copy.cover = "http://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg";
             } else if (book.hasOwnProperty("cover_edition_key")){
               copy.cover = "http://covers.openlibrary.org/b/olid/" + book.cover_edition_key + "-M.jpg";
             }
            
             copy.authorlist = book.author_name;            
             
             return copy;
             
           });
           callback(null, books);
         });
  }

}

module.exports = new OpenLibrary();