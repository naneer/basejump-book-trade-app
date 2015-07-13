'use strict';

angular.module('workspaceApp')
  .controller('RePintModalCtrl', [ '$timeout', '$modalInstance', 'modbook', 'Book', 'Auth', '$modal',
  function ($timeout, $modalInstance, modbook, Book, Auth, $modal) {
    var modalctrl = this;
    modalctrl.book = modbook;
    modalctrl.stacked = 0;

    modalctrl.close = function(){
      $modalInstance.close('close');
    };
    
    if(!modalctrl.book.hasOwnProperty("_owner")){
        modalctrl.add = function(){
         modalctrl.stacked = 1;
         var book = Book.save({}, modalctrl.book, function(value, res){
           modalctrl.stacked = 2;
           $timeout(function(){
               $modalInstance.close('success');
           }, 500);
         }, function(err){
            console.log(err);
            modalctrl.stacked = 0;
         });
        };
    } else if (modalctrl.book._owner._id === Auth.getCurrentUser()._id){
        modalctrl.delete = function(){
         modalctrl.stacked = 1;
         var book = Book.delete({ id: modalctrl.book._id }, function(value, res){
           modalctrl.stacked = 2;
           $timeout(function(){
               $modalInstance.close('delete');
           }, 500);
         }, function(err){
            console.log(err);
            modalctrl.stacked = 0;
         });
        }
    } else {
        modalctrl.requestTrade = function(){
         var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'components/re-pint/re-pint.modal.trade/re-pint.modal.trade.html',
            controller: 'RePintModalTradeCtrl',
            controllerAs: 'tradectrl',
            size: 'lg',
            resolve: {
              myBooks: [
                'Book',
                function(Book){
                  return Book.mybooks().$promise;
                }
              ]
            }
          });
        }        
    }
  }]);
