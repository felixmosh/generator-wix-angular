/// <reference path='../reference.ts'/>

module services {

  export class <%= classedName %>Service {

    private meaningOfLife:number = 42;

    /* @ngInject */
    constructor() {

    }

    // Service logic

    // Public API here
    public someMethod = function ():number {
      return this.meaningOfLife;
    };
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .factory('<%= cameledName %>Service', services.<%= classedName %>Service);
