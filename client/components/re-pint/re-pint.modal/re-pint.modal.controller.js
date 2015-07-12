'use strict';

angular.module('workspaceApp')
  .controller('RePintModalCtrl', [ '$timeout', '$modalInstance', 'modbook', 'Book', 'Auth', 
  function ($timeout, $modalInstance, modbook, Book, Auth) {
    var modalctrl = this;
    modalctrl.book = modbook;
    modalctrl.stacked = 0;
    modalctrl.close = function(){
      $modalInstance.close('close');
    };
    
    if(!modalctrl.book.hasOwnProperty("user_id")){
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
    } else if (modalctrl.book.user_id === Auth.getCurrentUser()._id){
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
    }
  }]);
