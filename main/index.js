'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('../script-base.js');
var yeoman = require('yeoman-generator');



var Generator = module.exports = function Generator(args) {
  this.args = args;
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createAppFile = function createAppFile() {
  this.angularModules = this.env.options.angularDeps;
  this.dashboardApp = this.env.options.dashboardApp;
  this.dashboardWidget = this.env.options.dashboardWidget;
  this.backOfficeApp = this.env.options.backOfficeApp;
  if (this.name !== 'main') {
    this.angularModules = this.angularModules || "'" + this.scriptAppName + "Translations', 'wixAngular', 'wixDashboardFramework'";
    this.appTemplate('app', 'scripts/' + this.name);
  } else if (this.backOfficeApp){
      this.angularModules += ", 'wix'";
      this.appTemplate('app', 'scripts/app');
      this.appTemplate('app', 'scripts/settingsApp');
      this.appTemplate('app', 'scripts/backOfficeApp');
  } else if (this.env.options.dashboardApp || !this.env.options.dashboardWidget) {
    this.appTemplate('app', 'scripts/app');
  } 
};
