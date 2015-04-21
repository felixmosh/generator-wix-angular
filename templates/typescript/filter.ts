/// <reference path='../reference.ts'/>

module filters {

  /* @ngInject */
  export function <%= cameledName %>() {
    return function (input:string) {
      return '<%= cameledName %> filter: ' + input;
    };
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .filter('<%= cameledName %>', filters.<%= cameledName %>);
