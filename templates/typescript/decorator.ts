/// <reference path='../reference.ts'/>

module decorators {

  /* @ngInject */
  export function <%= cameledName %>($delegate) {
    // decorate the $delegate
    return $delegate;
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .config(function ($provide:ng.IProvider) {
    // replace $http with whatever you want to decorate
    $provide.decorator('$http', decorators.<%= cameledName %>);
  });
