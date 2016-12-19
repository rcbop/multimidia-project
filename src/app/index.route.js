(function() {
  'use strict';

  angular
    .module('multimidiaProject')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/player', {
        templateUrl: 'app/player/player.html',
        controller: 'PlayerController',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
