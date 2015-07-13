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
               copy.title += ": " + book.subtitle; 
             }
             
             if(book.hasOwnProperty("cover_i")){
               var cover = "https://covers.openlibrary.org/b/id/" + book.cover_i;
               copy.cover = cover + "-L.jpg";
               copy.cover_small = cover + "-S.jpg";
             } else if (book.hasOwnProperty("cover_edition_key")){
               var olcover = "https://covers.openlibrary.org/b/olid/" + book.cover_edition_key;
               copy.cover = olcover + "-L.jpg";
               copy.cover_small = olcover + "-S.jpg";
             }
            
             copy.authorlist = book.author_name;            
             
             return copy;
             
           });
           callback(null, books);
         });
  }

}

module.exports = new OpenLibrary();