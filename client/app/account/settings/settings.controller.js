'use strict';

angular.module('workspaceApp')
  .controller('SettingsCtrl', [ '$scope', 'User', 'Auth', function ($scope, User, Auth) {
    $scope.errors = {};

    $scope.currentCity = Auth.getCurrentUser().city;
    $scope.currentState = Auth.getCurrentUser().state;
    $scope.currentFirstName = Auth.getCurrentUser().firstname;
    $scope.currentLastName = Auth.getCurrentUser().lastname;
    
    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};
		
		$scope.updateInfo = function(form){
		  if(form.$valid){
		    User.update({ id: Auth.getCurrentUser()._id }, { 
		      city: $scope.newCity,
		      state: $scope.newState
		    }, function(user){
		      $scope.settingsmessage = 'City and State successfully changed.';
		      $scope.currentCity = $scope.newCity;
		      $scope.currentState = $scope.newState;
		    }, function(err){
		      $scope.settingsmessage = err;
		    });
		  }
		};
	
		$scope.updateNameInfo = function(form){
		  if(form.$valid){
		    User.update({ id: Auth.getCurrentUser()._id }, { 
		      city: $scope.newFirstName,
		      state: $scope.newLastName
		    }, function(user){
		      $scope.settingsmessage = 'Full Name successfully changed.';
		      $scope.currentFirstName = $scope.newFirstName;
		      $scope.currentLastName = $scope.newLastName;
		    }, function(err){
		      $scope.namemessage = err;
		    });
		  }
		}
  }]);
