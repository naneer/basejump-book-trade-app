'use strict';

angular.module('workspaceApp')
  .controller('RePintModalTradeCtrl', [ '$timeout', '$modalInstance', 'myBooks', 'reqBook', 'Trade',
  function ($timeout, $modalInstance, myBooks, reqBook, Trade) {
    var tradectrl = this;
    tradectrl.mybooks = myBooks;
    tradectrl.disable = false;
    tradectrl.cancel = function(){
      $modalInstance.dismiss('cancel');
    };
    
    tradectrl.trade = function(book, event){
      tradectrl.disable = true;
      event.target.innerHTML = "";
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-circle-o-notch", "fa-spin");
      var text = document.createTextNode(" Sending...");
      event.target.appendChild(icon);
      event.target.appendChild(text);
      var data = {
        _to_book: reqBook._id,
        _touser: reqBook._owner._id,
        _from_book: book._id
      };
      var trade = Trade.save({}, data, function(value, res){
        icon.classList.remove("fa-circle-o-notch", "fa-spin");
        icon.classList.add("fa-check");
        text.nodeValue = " Request Sent";
        $timeout(function(){
          $modalInstance.close('trade success');
        }, 500);
      }, function(err){
        console.log(err);
        tradectrl.disable = false;
      });

    };
  }]);
