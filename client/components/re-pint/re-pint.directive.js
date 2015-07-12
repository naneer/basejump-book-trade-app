'use strict';

angular.module('workspaceApp')
  .directive('rePint', [ '$modal', function ($modal) {
    return {
      templateUrl: 'components/re-pint/re-pint.html',
      restrict: 'E',
      controller: angular.noop,
      controllerAs: 'pint',
      bindToController: true,
      replace: true,
      scope: {
        books: '='
      },
      link: function (scope, element, attrs, pint) {
        
        var grid = element[0];
        var msnry = new Masonry( grid, {
          columnWidth: '.grid-sizer',
          itemSelector: '.grid-item'
        });
        scope.$watch('pint.books', function(n, o) {
          if(n === undefined) { return; }
          msnry.layout();
          var imgLd = imagesLoaded(grid);
          imgLd.on('progress', function(instance, image){
            var item = $(image.img).parents('.grid-item');
            item.removeClass('hidden');
            msnry.appended( item );
          });
        });
        
        pint.open = function(book, event){
          var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'components/re-pint/re-pint.modal/re-pint.modal.html',
            controller: 'RePintModalCtrl',
            controllerAs: 'modalctrl',
            size: 'sm',
            resolve: {
              modbook: function(){
                return book;
              }
            }
          });
          modalInstance.result.then(function (result) {
            if(result === 'delete'){
              var item = $(event.target).parents('.grid-item');
              msnry.remove(item);
              msnry.layout();
            }
          });          
        };
      }
    };
  }]);