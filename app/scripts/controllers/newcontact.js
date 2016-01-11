'use strict';

/**
 * @ngdoc function
 * @name ngContactsApp.controller:NewcontactCtrl
 * @description
 * # NewcontactCtrl
 * Controller of the ngContactsApp
 */
angular.module('ngContactsApp')
  .controller('NewcontactCtrl',['$scope','contactToBeEdited','$location',"$firebaseArray",'$window', function ($scope,contactToBeEdited,$location,$firebaseArray,$window) {

    var ref = new Firebase("https://my-ng-contacts.firebaseio.com/");
    $scope.contacts = $firebaseArray(ref);

    $scope.title = "Add Contact";
    $scope.btnLabel = "Add Contact";

    if($location.$$path === "/edit") {
      $scope.contact = contactToBeEdited.getContact();
      $scope.title = "Edit Contact";
      $scope.btnLabel = "Edit Contact";
      $scope.name = $scope.contact.name;
      $scope.email = $scope.contact.email;
      $scope.company = $scope.contact.company;
      $scope.mobile = $scope.contact.phone.mobile;
      $scope.office = $scope.contact.phone.office;
      $scope.home = $scope.contact.phone.home;
      $scope.city = $scope.contact.address.city;
      $scope.street = $scope.contact.address.street;
      $scope.number = $scope.contact.address.number;
      $scope.postal = $scope.contact.address.postalCode;

     console.log($scope.contacts);

      $scope.submitForm =function($scope){
        $scope.contacts.$save(
          {
            name : $scope.name,
            email : $scope.email,
            company : $scope.company,
            phone : {
              mobile : $scope.mobile,
              office : $scope.office,
              home : $scope.home
            },
            address : {
              city : $scope.city,
              street : $scope.street,
              number : $scope.number,
              postalCode : $scope.postal
            }
          }
        );

        $window.location.href = '/'

      }

    }



    $scope.submitForm =function(){

      $scope.contacts.$add(
        {
          name : this.name,
          email : this.email,
          company : this.company,
          phone : {
            mobile : this.mobile,
            office : this.office,
            home : this.home
          },
          address : {
            city : this.city,
            street : this.street,
            number : this.number,
            postalCode : this.postal
          }
        }
      );

      $window.location.href = '/'

    }

  }]);
