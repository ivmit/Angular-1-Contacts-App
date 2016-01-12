'use strict';

/**
 * @ngdoc function
 * @name ngContactsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngContactsApp
 */
angular.module('ngContactsApp')
  .controller('MainCtrl', ['$scope', '$firebaseArray', 'contactToBeEdited', function ($scope,$firebaseArray,contactToBeEdited ) {

    var ref = new Firebase("https://my-ng-contacts.firebaseio.com/");
    $scope.contacts = $firebaseArray(ref);



    $scope.editContact = function(contact){
      contactToBeEdited.addContact(contact);
      if (typeof contact !== "undefined") {
        contactToBeEdited.setSendContact(true)
      }
    };



    //Remove Contact
    $scope.deleteContact = function(contact){
      $scope.contacts.$remove(contact);
    };


  }])
  .service('contactToBeEdited', function() {
    var Contact;
    var sendContact;
    this.addContact = function(contactFromMainCTRL) {
      Contact = contactFromMainCTRL
    };

    this.getContact = function() {
      return Contact;
    };

    this.setSendContact = function(value) {
      sendContact = value
    };


    this.getSendContact = function(){
      return sendContact
    };



});
