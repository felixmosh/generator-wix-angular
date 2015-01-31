'use strict';

angular.module('<%= scriptAppName %>Internal')
  .controller('BackOfficeController', function ($scope, $wix) {

    $scope.handleEvent = function (event) {
      $scope.$apply(function () {
        $scope.message = event;
      });
    };

    $wix.addEventListener($wix.Events.SETTINGS_UPDATED, $scope.handleEvent);

    if ($wix.Utils.getViewMode() !== 'standalone') {
      $scope.instanceId = $wix.Utils.getInstanceId();
      $scope.instance = $wix.Utils.getInstance();
    }
  });
