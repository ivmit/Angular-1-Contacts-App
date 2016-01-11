'use strict';

describe('Controller: EditcontactCtrl', function () {

  // load the controller's module
  beforeEach(module('ngContactsApp'));

  var EditcontactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditcontactCtrl = $controller('EditcontactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditcontactCtrl.awesomeThings.length).toBe(3);
  });
});
