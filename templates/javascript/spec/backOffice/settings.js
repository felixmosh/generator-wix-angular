'use strict';

describe('Controller: <%= classedName %>Controller', function () {

  var scope, wix;

  beforeEach(module('<%= scriptAppName %>Internal'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    wix = {
      addEventListener: function () {}
    };
    wix.UI = jasmine.createSpyObj('wix.UI', ['initialize', 'onChange']);
    wix.Events = {
      SETTINGS_UPDATED: 'updated'
    };
    $controller('<%= classedName %>Controller', {$scope: scope, $wix: wix});
  }));

  it('should init wix UI  with params"', function () {
    expect(wix.UI.initialize).toHaveBeenCalledWith({
      numOfImages: 10,
      isIconShown: true,
      imageVisibility: 'show',
      imagesToSync: 0,
      imageMeta: true,
      imageAlt: false,
      imageLink: false
    });
  });
  it('should init wix UI  with params"', function () {

    expect(scope.params).toBeDefined();
  });
});
