'use strict';

require('../lib/matchers.protractor.js');
var MainPage = require('../pages/main-page.js');
var experimentManager = require('../../../app/bower_components/wix-angular/test/lib/experiment-manager-test-kit.js');

describe('<%= _.camelize(appname) %>App Main Page', function () {
  var mainPage;

  beforeEach(function () {
    mainPage = new MainPage();
    experimentManager.setExperiments({});
    browser.addMockModule('<%= scriptAppName %>Mocks', function () {});
  });

  afterEach(function () {
    browser.removeMockModule('<%= scriptAppName %>Mocks');
  });

  it('should load successfully', function () {
    mainPage.navigate();
    expect(mainPage.getTitle().getText()).toEqual('Enjoy coding! - Yeoman');
  });

});
