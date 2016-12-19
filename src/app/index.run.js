(function() {
  'use strict';

  angular
    .module('multimidiaProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
