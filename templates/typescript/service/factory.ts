/// <reference path='../reference.ts'/>

module factories {

  export class <%= classedName %>Factory {

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
  .factory('<%= classedName %>Factory', factories.<%= classedName %>Factory);
