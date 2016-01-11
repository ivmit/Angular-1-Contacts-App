'use strict';

describe('Controller: ModalinstancectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('ngContactsApp'));

  var ModalinstancectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalinstancectrlCtrl = $controller('ModalinstancectrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModalinstancectrlCtrl.awesomeThings.length).toBe(3);
  });
});
