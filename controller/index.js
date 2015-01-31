'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);

  // if the controller name is suffixed with ctrl, remove the suffix
  // if the controller name is just "ctrl," don't append/remove "ctrl"
  if (this.name && this.name.toLowerCase() !== 'ctrl' && this.name.substr(-4).toLowerCase() === 'ctrl') {
    this.name = this.name.slice(0, -4);

  }
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createControllerFiles = function createControllerFiles() {
  if (this.env.options.backOfficeApp){
    this.generateSourceAndTest('controller/main', 'spec/backOffice/main', 'controllers', true);
    this.classedName = 'BackOffice'
    this.name        = 'backOffice';
    this.generateSourceAndTest('controller/backOffice', 'spec/backOffice/backOffice', 'controllers', true);
    this.classedName = 'Settings'
    this.name = 'settings';
    this.generateSourceAndTest('controller/settings', 'spec/backOffice/settings', 'controllers', true);
    //this.generateSourceAndTest('controller/main', 'spec/controller', 'controllers', this.options['skip-add'] || false);
  } else if (this.name !== 'main' || this.env.options.dashboardApp || !this.env.options.dashboardWidget) {
    this.generateSourceAndTest(
      'controller',
      'spec/controller',
      'controllers',
      this.options['skip-add'] || false
    );
  }
};
