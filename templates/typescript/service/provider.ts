/// <reference path='../reference.ts'/>

module providers {
  var salutation:string = 'Hello';

  class Greet {
    constructor () {

    }

    public greet():string {
      return salutation;
    }
  }

  export class <%= classedName %> {
    constructor() {

    }

    // Public API for configuration
    public setSalutation (s:string) {
      salutation = s;
    }

    /* @ngInject */
    public $get():Greet {
      return new Greet();
    }
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .provider('<%= cameledName %>', providers.<%= classedName %>);
