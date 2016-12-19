(function() {
  'use strict';

  angular
  .module('multimidiaProject')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, midiaService, toastr) {
    var vm = this;

    vm.midiaTypes = [];
    vm.classAnimation = '';
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getMidiaTypes();

      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr(message) {
      toastr.info(message);
      vm.classAnimation = '';
    }

    function getMidiaTypes(){
      vm.midiaTypes = midiaService.getMidiaTypes();
    }
  }
})();
