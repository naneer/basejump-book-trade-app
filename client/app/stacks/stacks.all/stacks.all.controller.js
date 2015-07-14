'use strict';

angular.module('workspaceApp')
  .controller('StacksAllCtrl', [ '$window', 'stack', 'Book', function ($window, stack, Book) {
    var ctrl = this;
    ctrl.books = stack;
    
    ctrl.load = function(){
      console.log("load");
      var query = Book.query({ offset: ctrl.books.length - 1 }).$promise;
      query.then(function(result){
        for(var i = 0; i < result.length; i++){
          ctrl.books.push(result[i]);
        }
      });
    };
    
    var hasScroll = window.innerHeight > document.documentElement.clientWidth;
    console.log(hasScroll);
    angular.element($window).bind("scroll", function() {
        var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        var body = document.body, html = document.documentElement;
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        var windowBottom = windowHeight + window.pageYOffset;

        if (windowBottom >= docHeight) {
            ctrl.load();
        }
    });
  }]);
