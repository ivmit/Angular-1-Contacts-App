'use strict';

/**
 * @ngdoc function
 * @name ngContactsApp.controller:NewcontactCtrl
 * @description
 * # NewcontactCtrl
 * Controller of the ngContactsApp
 */
angular.module('ngContactsApp')
  .controller('NewcontactCtrl',['$scope','contactToBeEdited','$location',"$firebaseArray",'$window','SweetAlert', function ($scope,contactToBeEdited,$location,$firebaseArray,$window,SweetAlert) {


    //Set the title of the view
    $scope.title = "Add New Contact";

    //Instantiate Firebase array with the url to the app as an argument
    var ref = new Firebase("https://my-ng-contacts.firebaseio.com/");
    $scope.contacts = $firebaseArray(ref);
    $scope.edit = false;

    if($location.$$path === "/edit" && contactToBeEdited.getSendContact() !== true){
      $window.location.href = '/';
    }


    //Check to see if it's the edit page
    if($location.$$path === "/edit") {
      $scope.title = "Edit Contact";
      $scope.edit = true;
      $scope.contact = contactToBeEdited.getContact();
      var id = $scope.contact.$id;
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





      $scope.submitEdit =function(){
        //Get the contact from Firebase that will be Edited
        var record = $scope.contacts.$getRecord(id);
        //Check to see if there are modification to the record
        if (
            $scope.contact.name === $scope.name &&
            $scope.email === $scope.contact.email &&
            $scope.company === $scope.contact.company &&
            $scope.mobile === $scope.contact.phone.mobile &&
            $scope.office === $scope.contact.phone.office &&
            $scope.home === $scope.contact.phone.home &&
            $scope.city === $scope.contact.address.city &&
            $scope.street === $scope.contact.address.street &&
            $scope.number === $scope.contact.address.number &&
            $scope.postal === $scope.contact.address.postalCode
        ) {
          //Redirect Home after alert
          SweetAlert.error("Contact '"+ $scope.name + "' not modified.You will be redirected to the main page").then(function(){
            $window.location.href = '/';
          })
        } else {
          //Set record to the modification
          record.name = $scope.name;
          record.email = $scope.email;
          record.company = $scope.company;
          record.phone.mobile = $scope.mobile;
          record.phone.office = $scope.office;
          record.phone.home = $scope.home;
          record.address.city = $scope.city;
          record.address.street = $scope.street;
          record.address.number = $scope.number;
          record.address.postal = $scope.postal;
          //redirect to Home after alert
          $scope.contacts.$save(record).then(function(){
            SweetAlert.success("Contact '"+ $scope.name + "' edited successfully.You will be redirected to the main page").then(function(){
              $window.location.href = '/';
            });
          });
        }


      }

    }


    //Add new contact to database
    $scope.submitForm =function(userForm) {

      if (typeof this.name == "undefined") {
        SweetAlert.error("Please makes sure that all fields have valid values")
      } else {

        $scope.contacts.$add(
          {
            name: this.name,
            email: this.email,
            company: this.company,
            phone: {
              mobile: this.mobile,
              office: this.office,
              home: this.home
            },
            address: {
              city: this.city,
              street: this.street,
              number: this.number,
              postalCode: this.postal
            }
          }
        ).then(function () {
            SweetAlert.success("Contact '" + $scope.name + "' add successfully to Firebase.You will be redirected to the main page").then(function () {
              $window.location.href = '/';
            });
          });


      }

    }

  }]);
