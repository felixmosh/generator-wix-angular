'use strict';

describe('Controller: <%= classedName %>Controller', function () {
  var scope;
  beforeEach(module('<%= scriptAppName %>Internal'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    var wix = {
      addEventListener: function () {}
    };
    wix.Utils = jasmine.createSpyObj('utils', ['getInstanceId', 'getInstance', 'getViewMode']);
    wix.Events = {
      SETTINGS_UPDATED: 'updated'
    };
    $controller('<%= classedName %>Controller', {$scope: scope, $wix: wix});
  }));

  it('should handle messages ', function () {
    expect(scope.message).toBeUndefined();
    scope.handleEvent('message');
    expect(scope.message).toEqual('message');
  });
});
