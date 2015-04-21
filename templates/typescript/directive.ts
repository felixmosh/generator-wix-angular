/// <reference path='../reference.ts'/>

module directives {

  /* @ngInject */
  function postLink(scope:ng.IScope, element:ng.Element, attrs:ng.IAttributes) {
    element.text('this is the <%= cameledName %> directive');
  }

  export function <%= cameledName %>():ng.IDirective {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: postLink
    };
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .directive('<%= cameledName %>', directives.<%= cameledName %>);
