/// <reference path='../reference.ts'/>

module controllers {

  export class <%= classedName %>Controller {

  /* @ngInject */
  constructor(private $scope:ng.IScope) {
		  $scope.$emit('we are using controllerAs syntax, scope is used only for events and watches');
      this.awesomeThings = [
        'Bower',
        'Grunt',
        'Haml',
        'Compass',
        'AngularJS',
        'Karma'
      ];
    }

    private privateFunction() {

    }

    public publicFunction(thing:string) {

    }
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .controller('<%= classedName %>Ctrl', controllers.<%= classedName %>Controller);
